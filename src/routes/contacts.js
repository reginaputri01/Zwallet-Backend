const express = require('express')
const contactController = require('../controllers/contactsController')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')

router
  .get('/:id', verifyAccess, contactController.getContactById)
  .get('/', verifyAccess, contactController.getAllContact)
  .post('/', verifyAccess, upload, contactController.insertContact)
  .patch('/:id', verifyAccess, upload, contactController.updateContact)
  .delete('/:id', verifyAccess, contactController.deleteContact)
  
module.exports = router
