const userService = require('../service/userService');
const { validationResult } = require('express-validator');
const { User, Character, Role } = require('../db/models');

const ApiError = require('../exceptions/ApiError')

async function registration(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Ошибка валидации', errors.array()))
    }
    const userData = await userService.registration(req.body);
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    res.status(201).json(userData);
  } catch (error) {
    next(error)
  }
}

async function login(req, res, next) {
  try {
    const userData = await userService.login(req.body);
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    res.status(200).json(userData);
  } catch (error) {
    next(error)
  }
}


async function logout(req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const token = await userService.logout(refreshToken);
    res.clearCookie('refreshToken');
    res.status(200).json(token);
  } catch (error) {
    next(error)
  }
}

async function refreshToken(req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const userData = await userService.refresh(refreshToken);
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
    res.status(200).json(userData);
  } catch (error) {
    next(error)
  }
}

async function getUser(req, res, next){
  try {
    let user = await User.update({userName:req.body.userName},{
      where: {id:req.body.id}
    });
    res.json(user.userName)
  } catch (error) {
    next(error)
  }
}

async function updateUser(req, res, next){
  try {
    let users = await User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    res.json(users)
  } catch (error) {
    next(error)
  }
}

async function getCharacter(req, res){
  try {
    let characters = await Character.findAll({
     include: {model: Role, 
       attributes: {
        exclude: ['createdAt', "updatedAt"],
      },},
     attributes: {
        exclude: ['createdAt', "updatedAt"],
      },
      raw: true
    });
    console.log(characters);
    res.json(characters)
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  registration,
  login,
  logout,
  refreshToken,
  getUser,
  getCharacter,
  updateUser
}


