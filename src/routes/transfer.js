const express = require('express')
const transferController = require('../controllers/transfersController')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')

router
  .get('/:id', verifyAccess, transferController.getTransferById)
  .get('/', verifyAccess, transferController.getAllTransfer)
  .post('/', verifyAccess, transferController.insertTransfer)
  .delete('/:id', verifyAccess, transferController.deleteTransfer)
  
module.exports = router
