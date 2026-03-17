const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const checkRequiredFields = require('../middleware/validate');

router.post('/register', checkRequiredFields(['firstName', 'lastName', 'email', 'password']), authController.register);
router.post('/login', checkRequiredFields(['email', 'password']), authController.login);

module.exports = router;