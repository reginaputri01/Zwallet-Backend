const express = require('express')
const receiverController = require('../controllers/receiversController')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')

router
  .get('/:id', verifyAccess, receiverController.getReceiverById)
  .get('/', verifyAccess, receiverController.getAllReceiver)
  .post('/', verifyAccess, upload, receiverController.insertReceiver)
  .patch('/:id', verifyAccess, upload, receiverController.updateReceiver)
  .delete('/:id', verifyAccess, receiverController.deleteReceiver)
  
module.exports = router
