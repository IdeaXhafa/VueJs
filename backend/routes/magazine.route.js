const express = require('express')
const BestSeller = require('../models/Magazine')
const Route = express.Router()

let BestSellerModel = require('../models/Magazine')

Route.route('/create-magazine').post((req, res, next) => {
    BestSellerModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

Route.route('/magazines').get((req, res, next) => {
    BestSellerModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

Route.route('/edit-magazine/:id').get((req, res, next) => {
    BestSellerModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
Route.route('/update-magazine/:id').put((req, res, next) => {
    BestSellerModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('Magazine successfully updated!')
      }
    },
  )
})

// Delete
Route.route('/delete-magazine/:id').delete((req, res, next) => {
    BestSellerModel.findByIdAndRemove(req.params.id, (error, data) => {
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