import mongoose from "mongoose";

const Schema = mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  isAvailable: String,
  photoUrl: String,
  filePath: String,
})

const model = mongoose.model('Bestseller', Schema)
export default model;



// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// let bestsellerSchema = new Schema(
//   {
//     title: {
//       type: String,
//     },
//     author: {
//       type: String,
//     },
//     price: {
//       type: Number,
//     },
//     isAvailable: {
//       type: String,
//     },
//     photoUrl: {
//       type:String,
//     },
//     filePath: {
//       type:String,
//     }
//   },
//   {
//     collection: 'bestsellers',
//   },
// )

// module.exports = mongoose.model('BestSeller', bestsellerSchema)