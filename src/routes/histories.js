const express = require('express')
const historyController = require('../controllers/historiesController')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')

router
  .get('/:id', verifyAccess, historyController.getHistoryById)
  .get('/', verifyAccess, historyController.getAllHistory)
  .post('/', verifyAccess, historyController.insertHistory)
  .delete('/:id', verifyAccess, historyController.deleteHistory)
  
module.exports = router
