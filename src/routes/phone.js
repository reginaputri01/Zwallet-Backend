const express = require('express')
const phoneController = require('../controllers/phoneController')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')

router
  .get('/:id', verifyAccess, phoneController.getPhoneById)
  .get('/', verifyAccess, phoneController.getAllPhone)
  .post('/', verifyAccess, phoneController.insertPhone)
  .patch('/:id', verifyAccess, phoneController.updatePhone)
  .delete('/:id', verifyAccess, phoneController.deletePhone)
  
module.exports = router
