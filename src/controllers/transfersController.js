const transferModels = require('../models/transfersModel')
const helpers = require('../helpers/helpers')

const transfers = {
  getTransferById: (req, res) => {
    const id = req.params.id
    transferModels.getTransferById(id)
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

  getAllTransfer: (req, res) => {
    transferModels.getAllTransfer()
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
  deleteTransfer: (req, res) => {
    const id = req.params.id
    transferModels.deleteTransfer(id)
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
  insertTransfer: (req, res) => {
    const { amount, notes } = req.body
    const data = {
      amount,
      notes,
      userId: 1,
      receiverId: 1,
      date: new Date()
    }
    transferModels.insertTransfer(data)
    .then((result) => {
        console.log(result)
        helpers.response(res, null, result, 200, null)
    })
    .catch((err) => {
        console.log(err)
    })
  }
}

module.exports = transfers
