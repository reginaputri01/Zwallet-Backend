const express = require('express')
const usersRouters = require('./users')
const receiverRouters = require('./receivers')
const transferRouters = require('./transfer')
const historyRouters = require('./histories')
const router = express.Router()

router
  .use('/users', usersRouters)
  .use('/receivers', receiverRouters)
  .use('/transfer', transferRouters)
  .use('/history', historyRouters)

module.exports = router
