const express = require('express')
const userController = require('../controllers/usersController')
const userForgot = require('../middlewares/forgotPassword')
const { upload } = require('../middlewares/multer')
const router = express.Router()

router
  .post('/register', userController.register)
  .post('/login', userController.login)
  .post('/forgotpassword', userForgot.forgotPassword)
  .patch('/resetpassword/:id', userController.resetPassword)
  .patch('/myProfile/:id', userController.profileUser)
  .patch('/uploadImg/:id', upload, userController.updateImage)
  .patch('/createPin/:id', upload, userController.createPin)
  .get('/:id', userController.getUserById)

module.exports = router
