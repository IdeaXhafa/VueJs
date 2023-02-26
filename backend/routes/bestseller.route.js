import express from 'express'
import BestsellerController from '../controllers/BestSellersController'

const bestsellerRouter = express.Router({ mergeParams:true });

bestsellerRouter.get('/get-bestseller', BestsellerController.list)
bestsellerRouter.post('/create-bestseller', BestsellerController.create)
bestsellerRouter.put('/update-bestseller/:id', BestsellerController.edit)
bestsellerRouter.delete('/delete-bestseller/:id', BestsellerController.delete)

export default bestsellerRouter;


// const express = require('express')
// const BestSeller = require('../models/BestSeller')
// const Route = express.Router()

// let BestSellerModel = require('../models/BestSeller')

// Route.route('/create-bestseller').post((req, res, next) => {
//     BestSellerModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// Route.route('/get-bestseller').get((req, res, next) => {
//     BestSellerModel.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// Route.route('/edit-bestseller/:id').get((req, res, next) => {
//     BestSellerModel.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// Route.route('/update-bestseller/:id').put((req, res, next) => {
//     BestSellerModel.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         return next(error)
//       } else {
//         res.json(data)
//         console.log('Best Seller successfully updated!')
//       }
//     },
//   )
// })


// Route.route('/delete-bestseller/:id').delete((req, res, next) => {
//     BestSellerModel.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.status(200).json({
//         msg: data,
//       })
//     }
//   })
// })

// module.exports = Route
