const express = require('express')
const Contact = require('../models/Contact')
const Route = express.Router()

let ContactModel = require('../models/Contact')

Route.route('/send-message').post((req, res, next) => {
    ContactModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

Route.route('/get-messages').get((req, res, next) => {
  ContactModel.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})

module.exports = Route