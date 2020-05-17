const express = require('express');
const router = express.Router();
const AuthController = require('../controller/auth')


router.post('/register', AuthController.postRegister);
router.post('/login', AuthController.postLogin)

module.exports = router