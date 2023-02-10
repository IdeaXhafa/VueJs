const express = require('express')
const BestSeller = require('../models/BestSeller')
const Route = express.Router()

// const BestSellerController = require('../controllers/BestSellersController')

// Route.get('/', BestSellerController.index)
// Route.post('/show', BestSellerController.show)
// Route.post('/store', BestSellerController.store)
// Route.post('/update', BestSellerController.update)
// Route.post('/delete', BestSellerController.destroy)

//const upload = require('../middleware/upload')
// model
let BestSellerModel = require('../models/BestSeller')

Route.route('/create-bestseller').post((req, res, next) => {
    BestSellerModel.create(req.body, (error, data) => {
    // if(req.file){
    //   BestSeller.picture = req.file.path
    // }
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

Route.route('/').get((req, res, next) => {
    BestSellerModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

Route.route('/edit-bestseller/:id').get((req, res, next) => {
    BestSellerModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update
Route.route('/update-bestseller/:id').put((req, res, next) => {
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
Route.route('/delete-bestseller/:id').delete((req, res, next) => {
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
