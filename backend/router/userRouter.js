const router = require('express').Router();
const userController = require('../controllers/userControllers');
const { body } = require('express-validator');
const auth = require('../middlewares/auth-middleware');

router.post('/singup',
  body('email').isEmail(),
  body('password').isLength({min: 5}),
  userController.registration,
  );

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refreshToken);
router.get('/',  userController.getUser);
router.get('/user/refresh', userController.refreshToken);
router.get('/game', userController.getCharacter);
router.put('/update', userController.updateUser)



module.exports = router;