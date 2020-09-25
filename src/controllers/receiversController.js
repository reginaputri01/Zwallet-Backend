const receiverModels = require('../models/receiversModel')
const helpers = require('../helpers/helpers')

const receivers = {
  getReceiverById: (req, res) => {
    const id = req.params.id
    receiverModels.getReceiverById(id)
      .then((result) => {
        if (result != '') {
          helpers.response(res, null, result, 200, null)
        } else {
          helpers.response(res, null, 'Receiver not found', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getAllReceiver: (req, res) => {
    receiverModels.getAllReceiver()
      .then((result) => {
        if (result != '') {
          helpers.response(res, null, result, 200, null)
        } else {
          helpers.response(res, null, 'Receiver not found', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateReceiver: (req, res) => {
    const id = req.params.id
    const { name } = req.body
    const data = {
      name
    }

    if (req.file) {
        data.image = process.env.BASE_URL + 'uploads/' + req.file.filename
    }

    receiverModels.updateReceiver(id, data)
      .then((result) => {
        const resultReceiver= result
        console.log(result)
        helpers.response(res, null, resultReceiver, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteReceiver: (req, res) => {
    const id = req.params.id
    receiverModels.deleteReceiver(id)
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
  insertReceiver: (req, res) => {
    const { name,  phoneNumber } = req.body
    const data = {
      name,
      image: 'https://i7.pngguru.com/preview/527/663/825/logo-person-user-person-icon.jpg',
      phoneNumber
    }
    receiverModels.insertReceiver(data)
      .then((result) => {
        console.log(result)
        helpers.response(res, null, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = receivers
