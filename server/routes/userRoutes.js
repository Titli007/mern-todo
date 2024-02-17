const express = require('express')
const { createUser,loginUser } = require('../controllers/userController')
// const User  = require('../models/User')

const Routes = express.Router()

Routes.post('/user/create', createUser)

Routes.post('/user/login', loginUser)


module.exports = Routes