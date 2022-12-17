const jwt = require('jsonwebtoken');
const { Token } = require('../db/models');

function validateAccsessToken(token) {
  try {
    const userData = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
    return userData;
  } catch {
    return null
  }
};

function validateRefreshToken(token) {
  try {
    const userData = jwt.verify(token, process.env.JWT_REFRESH_TOKEN);
    return userData;
  } catch {
    return null
  }
};


function generateToken(user) {
  const { id, email, userName } = user;
  try {
    const accessToken = jwt.sign({ id, email, userName }, process.env.JWT_ACCESS_TOKEN, {
      expiresIn: '30m'
    })
    const refreshToken = jwt.sign({ id, email, userName }, process.env.JWT_REFRESH_TOKEN, {
      expiresIn: '30d'
    })
    console.log(accessToken)
    return {
      accessToken,
      refreshToken
    }
  } catch (error) {
    console.log(error)
  }

}

async function saveToken(userId, refreshToken) {
  const tokenData = await Token.findOne({ where: { userId } });
  if (tokenData) {
    tokenData.refreshToken = refreshToken;
    return await tokenData.save();
  }
  const token = await Token.create({
    userId,
    refreshToken
  });
  return token;
};

async function removeToken(refreshToken) {
  const tokenData = await Token.destroy({
    where: { refreshToken }
  })
  return tokenData
}

async function findToken(refreshToken) {
  const tokenData = await Token.findOne({
    where: { refreshToken }
  })
  return tokenData
}
module.exports = {
  generateToken,
  saveToken,
  removeToken,
  validateAccsessToken,
  validateRefreshToken,
  findToken
}