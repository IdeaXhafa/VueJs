import express from 'express'
import CartController from '../controllers/CartController'

const bestsellerRouter = express.Router({ mergeParams:true });

bestsellerRouter.get('/get-cart/:id', CartController.list)
//bestsellerRouter.get('/get-cart/:id', CartController.find)
bestsellerRouter.post('/create-cart', CartController.create)
bestsellerRouter.put('/update-cart/:id', CartController.edit)
bestsellerRouter.delete('/delete-cart/:id', CartController.delete)

export default bestsellerRouter;

// const express = require('express')
// const Route = express.Router()
// let BestsellerModel = require('../models/BestSeller')

// Route.route('/get-cart').get((req, res, next) => {
//     BestsellerModel.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// Route.route('/add-cart').post((req, res, next) => {
//     BestsellerModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// module.exports = Route