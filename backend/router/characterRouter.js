const router = require('express').Router();
const characterController = require('../controllers/characterController')

router.get('/user/game', characterController.getCharacter);

module.exports = router