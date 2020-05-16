const express = require('express');
const router = express.router();
const AuthController = require('../controller/auth')


router.post('/login', AuthController.postLogin)