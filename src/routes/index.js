const express = require('express')
const usersRouters = require('./users')
const contactsRouters = require('./contacts')
const transferRouters = require('./transfer')
const historyRouters = require('./histories')
const router = express.Router()

router
  .use('/users', usersRouters)
  .use('/contacts', contactsRouters)
  .use('/transfer', transferRouters)
  .use('/history', historyRouters)

module.exports = router
