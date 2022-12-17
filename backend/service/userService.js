const { User } = require('../db/models');
const bcrypt = require('bcrypt');
const tokenService = require('./tokenService')
const ApiError = require('../exceptions/ApiError')

function withoutPassword(user) {
  const copyUser = {...user};
  delete copyUser.password
  return copyUser
}
async function registration({ email, password }) {
  const isFindUser = await User.findOne({ where: { email } });
    if (isFindUser) {
      throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует!`);
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email,
      password: hashPassword
    },
    )
    const userDto = withoutPassword(newUser)
    const tokens = tokenService.generateToken(newUser);

    await tokenService.saveToken(newUser.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    }

};

async function login({ password, email }) {
  const user = await User.findOne({
    where: {
      email
    },
    raw: true
  })
  if (!user) {
    throw ApiError.BadRequest(`Пользователь ${email} не найден!`)
  }

  const isPassEquals = await bcrypt.compare(password, user.password)
  if (!isPassEquals) {
    throw ApiError.BadRequest('Неверный пароль!')
  }

  const userDto = withoutPassword(user);
  const tokens = tokenService.generateToken(userDto);
  await tokenService.saveToken(user.id, tokens.refreshToken);

  return {
    ...tokens,
    user: userDto
  }
};

async function logout(refreshToken) {
  const token = tokenService.removeToken(refreshToken);
  return token;
};



async function refresh(refreshToken) {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError();
  }
  const userData = tokenService.validateRefreshToken(refreshToken);
  const tokenFromDb = await tokenService.findToken(refreshToken);
  
  if (!userData || !tokenFromDb) {
    throw ApiError.UnauthorizedError();
  }
  const user = await User.findOne({
    where: { id: userData.id },
    attributes: {
      exclude: ['password'],
    },
  })
  const tokens = tokenService.generateToken(userDto);
  await tokenService.saveToken(user.id, tokens.refreshToken);

  return {
    ...tokens,
    user
  }
};

module.exports = {
  registration,
  login,
  logout,
  refresh
}