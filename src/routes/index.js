const express = require('express')
const usersRouters = require('./users')
const phoneRouters = require('./phone')
const receiverRouters = require('./receivers')
const transferRouters = require('./transfer')
const historyRouters = require('./histories')
const router = express.Router()

router
  .use('/users', usersRouters)
  .use('/phone', phoneRouters)
  .use('/receivers', receiverRouters)
  .use('/transfer', transferRouters)
  .use('/history', historyRouters)

module.exports = router
