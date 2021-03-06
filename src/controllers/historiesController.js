const historyModels = require('../models/historiesModel')
const helpers = require('../helpers/helpers')

const histories = {
  getHistoryById: (req, res) => {
    const id = req.params.id
    historyModels.getHistoryById(id)
      .then((result) => {
        if (result != '') {
          helpers.response(res, null, result, 200, null)
        } else {
          helpers.response(res, null, 'History not found', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getAllHistory: (req, res) => {
    historyModels.getAllHistory()
      .then((result) => {
        if (result != '') {
          helpers.response(res, null, result, 200, null)
        } else {
          helpers.response(res, null, 'Data not found', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteHistory: (req, res) => {
    const id = req.params.id
    historyModels.deleteHistory(id)
      .then((result) => {
        if (result != 'Data not found') {
          helpers.response(res, null, result, 200, null)
        } else {
          helpers.response(res, null, result, 404, 'Not Found')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertHistory: (req, res) => {
    const { userId, senderId, receiverId, amount, notes } = req.body
    const data = {
      userId,
      senderId,
      receiverId,
      amount,
      notes,
      date: new Date()
    }
    historyModels.insertHistory(data)
      .then((result) => {
        helpers.response(res, null, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = histories
