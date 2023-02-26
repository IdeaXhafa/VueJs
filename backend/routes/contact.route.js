import express from 'express'
import ContactController from '../controllers/ContactController'

const contactRouter = express.Router({ mergeParams:true });

contactRouter.get('/get-messages', ContactController.list)
contactRouter.post('/send-message', ContactController.create)

export default contactRouter;


// const express = require('express')
// const Contact = require('../models/Contact')
// const Route = express.Router()

// let ContactModel = require('../models/Contact')

// Route.route('/send-message').post((req, res, next) => {
//     ContactModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// Route.route('/get-messages').get((req, res, next) => {
//   ContactModel.find((error, data) => {
//   if (error) {
//     return next(error)
//   } else {
//     res.json(data)
//   }
// })
// })

// module.exports = Route