const express = require('express');
const { signUpFn, loginFn, checkUserByToken } = require('../handlers/user');


const userRoutes = express.Router()

userRoutes.post('/user/signup',signUpFn)
userRoutes.post('/user/login',loginFn)
userRoutes.post('/checkUserByToken', checkUserByToken);

module.exports = {userRoutes}