const contactModels = require('../models/contactsModel')
const helpers = require('../helpers/helpers')

const contacts = {
  getContactById: (req, res) => {
    const id = req.params.id
    contactModels.getContactById(id)
      .then((result) => {
        if (result != '') {
          helpers.response(res, null, result, 200, null)
        } else {
          helpers.response(res, null, 'Contact not found', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },

  getAllContact: (req, res) => {
    contactModels.getAllContact()
      .then((result) => {
        if (result != '') {
          helpers.response(res, null, result, 200, null)
        } else {
          helpers.response(res, null, 'Contact not found', 404, 'Error')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateContact: (req, res) => {
    const id = req.params.id
    const { name } = req.body
    const data = {
      name
    }

    if (req.file) {
        data.image = process.env.BASE_URL + 'uploads/' + req.file.filename
    }

    contactModels.updateContact(id, data)
      .then((result) => {
        const resultContacts = result
        console.log(result)
        helpers.response(res, null, resultContacts, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteContact: (req, res) => {
    const id = req.params.id
    contactModels.deleteContact(id)
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
  insertContact: (req, res) => {
    const { name,  phoneNumber } = req.body
    const data = {
      name,
      image: 'https://i7.pngguru.com/preview/527/663/825/logo-person-user-person-icon.jpg',
      phoneNumber
    }
    contactModels.insertContact(data)
      .then((result) => {
        console.log(result)
        helpers.response(res, null, result, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = contacts
