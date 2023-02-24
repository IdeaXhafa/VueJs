const express = require('express')
const Book = require('../models/Photos')
const Route = express.Router()

let BookModel = require('../models/Photos')

Route.route('/create-photo').post((req, res, next) => {
    BookModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

Route.route('/get-photo').get((req, res, next) => {
    BookModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


Route.route('/delete-photo/:id').delete((req, res, next) => {
    BookModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = Route