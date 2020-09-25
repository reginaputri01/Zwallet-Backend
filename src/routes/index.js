const express = require('express')
const usersRouters = require('./users')
const contactsRouters = require('./contacts')
const transferRouters = require('./transfer')
const router = express.Router()

router
  .use('/users', usersRouters)
  .use('/contacts', contactsRouters)
  .use('/transfer', transferRouters)

module.exports = router
