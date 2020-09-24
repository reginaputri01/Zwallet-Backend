const express = require('express')
const usersRouters = require('./users')
const contactsRouters = require('./contacts')
const router = express.Router()

router
  .use('/users', usersRouters)
  .use('/contacts', contactsRouters)

module.exports = router
