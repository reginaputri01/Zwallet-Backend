const phoneModel = require('../models/phoneModel')
const helpers = require('../helpers/helpers')

const phone = {
  getPhoneById: (req, res) => {
    const id = req.params.id
    phoneModel.getPhoneById(id)
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

  getAllPhone: (req, res) => {
    phoneModel.getAllPhone()
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
  deletePhone: (req, res) => {
    const id = req.params.id
    phoneModel.deletePhone(id)
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
  updatePhone: (req, res) => {
    const id = req.params.id
    const { phoneNumber } = req.body
    const data = {
      phoneNumber
    }
    phoneModel.updatePhone(id, data)
    .then((result) => {
        const resultPhone = result
        console.log(result)
        helpers.response(res, null, resultPhone, 200, null)
    })
    .catch((err) => {
        console.log(err)
    })
  },
  insertPhone: (req, res) => {
    const { phoneNumber, userId } = req.body
    const data = {
      phoneNumber,
      userId
    }
    phoneModel.insertPhone(data)
    .then((result) => {
        console.log(result)
        helpers.response(res, null, result, 200, null)
    })
    .catch((err) => {
        console.log(err)
    })
  }
}

module.exports = phone
