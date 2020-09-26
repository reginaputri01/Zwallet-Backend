const nodemailer = require('nodemailer')
const modelUser = require('../models/usersModel')
const helpers = require('../helpers/helpers')

module.exports = {
  forgotPassword: (req, res) => {
    const { email } = req.body
    modelUser.login(email)
      .then((result) => {
        if (result.length < 1) return helpers.response(res, null, 'Email not found!', 401, null)

        const transporter = nodemailer.createTransport({
          service: process.env.MAILER_SERVICE_PROVIDER,
          auth: {
            user: process.env.MAILER_EMAIL_ID,
            pass: process.env.MAILER_PASSWORD
          }
        })

        const mailOptions = {
          from: process.env.MAILER_EMAIL_ID,
          to: email,
          subject: 'Reset your password',
          html: '<h1>Hallo, </h1> <p>Click the link below to enter the reset password page and create your new password</p> <a href=' + process.env.RESET_URL + '>Go Reset Password</a>'
        }

        transporter.sendMail(mailOptions, (err, info) => {
          if (err) throw err
          console.log('Email sent: ' + mailOptions.to + ' ' + info.response)
          helpers.response(res, null, result[0].id, 200, null, 'Check your email')
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
