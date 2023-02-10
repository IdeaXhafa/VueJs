const express = require('express')
const Book = require('../models/Book')
const Route = express.Router()


let BookModel = require('../models/Book')

Route.route('/create-book').post((req, res, next) => {
    BookModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

Route.route('/').get((req, res, next) => {
    BookModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

Route.route('/edit-book/:id').get((req, res, next) => {
    BookModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
Route.route('/update-book/:id').put((req, res, next) => {
    BookModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('Book successfully updated!')
      }
    },
  )
})

Route.route('/delete-book/:id').delete((req, res, next) => {
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
