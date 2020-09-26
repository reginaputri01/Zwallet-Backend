const modelUser = require('../models/usersModel')
const helpers = require('../helpers/helpers')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
  register: (req, res) => {
    const { username, email, password } = req.body
    const data = {
      username,
      email,
      password,
      image: 'https://i7.pngguru.com/preview/527/663/825/logo-person-user-person-icon.jpg'
    }
    bcrypt.genSalt(10, function (_err, salt) {
      bcrypt.hash(data.password, salt, function (_err, hash) {
        data.password = hash
        modelUser.register(data)
          .then((result) => {
            if (result == 'Email is already exists') {
              helpers.response(res, null, result, 403, 'Forbidden')
            } else {
              helpers.response(res, null, 'Register Success', 201, null)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      })
    })
  },

  login: (req, res) => {
    const { email, password } = req.body
    modelUser.login(email)
    .then((result) => {
      if (result.length < 1) return helpers.response(res, null, 'Email not found!', 401, null)
      const user = result[0]
      const hash = user.password
      bcrypt.compare(password, hash).then((resCompare) => {
        if (!resCompare) return helpers.response(res, null, 'Password wrong!', 401, null)
        const payload = {
          id: user.id,
          email: user.email
        }
        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '3h' }, (_err, token) => {
          user.token = token
          delete user.password
          helpers.response(res, null, user, 200)
        })
      })
    })
    .catch((err) => {
      console.log(err)
    })
  },

  resetPassword: (req, res) => {
    const id = req.params.id
    const { password } = req.body

    const data = {
      password
    }

    bcrypt.genSalt(10, function (_err, salt) {
      bcrypt.hash(data.password, salt, function (_err, hash) {
        data.password = hash
        modelUser.resetPassword(id, data)
          .then((result) => {
            helpers.response(res, null, 'Reset Password Success', 201, null)
          })
          .catch((err) => {
            console.log(err)
          })
      })
    })
  },

  updateProfile: (req, res) => {
    const id = req.params.id
    const { firstName, lastName, username, email, phoneNumber } = req.body
    const data = {
      firstName,
      lastName,
      username,
      email,
      phoneNumber
    }
    modelUser.updateProfile(id, data)
    .then((result) => {
        const resultUsers = result
        console.log(result)
        helpers.response(res, null, resultUsers, 200, null)
    })
    .catch((err) => {
        console.log(err)
    })
  },

  updateImage: (req, res) => {
    const id = req.params.id
    const data = {
      image: process.env.BASE_URL + 'uploads/' + req.file.filename
    }
    modelUser.updateImage(id, data)
    .then((result) => {
        const resultUsers = result
        console.log(result)
        helpers.response(res, null, resultUsers, 200, null)
    })
    .catch((err) => {
        console.log(err)
    })
  },

  createPin: (req, res) => {
    const id = req.params.id
    const { pin } = req.body
    const data = {
      pin
    }
    modelUser.createPin(id, data)
    .then((result) => {
        const resultUsers = result
        console.log(result)
        helpers.response(res, null, resultUsers, 200, null)
    })
    .catch((err) => {
        console.log(err)
    })
  },

  getUserById: (req, res) => {
    const id = req.params.id
    modelUser.getUserById(id)
    .then((result) => {
      console.log(result)
      if (result != '') {
        helpers.response(res, null, result, 200, null)
      } else {
        helpers.response(res, null, 'User not found', 404, 'error')
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
