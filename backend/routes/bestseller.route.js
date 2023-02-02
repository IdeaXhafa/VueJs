const express = require('express')
const studentRoute = express.Router()

// model
let BestSellerModel = require('../models/BestSeller')

studentRoute.route('/create-bestseller').post((req, res, next) => {
    BestSellerModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

studentRoute.route('/').get((req, res, next) => {
    BestSellerModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

studentRoute.route('/edit-bestseller/:id').get((req, res, next) => {
    BestSellerModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
studentRoute.route('/update-bestseller/:id').put((req, res, next) => {
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
        console.log('Best Seller successfully updated!')
      }
    },
  )
})

// Delete
studentRoute.route('/delete-bestseller/:id').delete((req, res, next) => {
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

module.exports = studentRoute
