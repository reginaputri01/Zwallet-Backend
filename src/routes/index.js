const express = require('express')
const usersRouters = require('./users')
const phoneRouters = require('./phone')
const historyRouters = require('./histories')
const router = express.Router()

router
  .use('/users', usersRouters)
  .use('/phone', phoneRouters)
  .use('/history', historyRouters)

module.exports = router
