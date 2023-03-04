// const mongoose = require('mongoose')

import mongoose from "mongoose";

const Schema = mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  photoUrl: String,
  filePath: String,
})

const model = mongoose.model('Book', Schema)
export default model;

// let bookSchema = new Schema(
//   {
//     title: {
//       type: String,
//     },
//     author: {
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
//     collection: 'book',
//   },
// )

// module.exports = mongoose.model('Book', bookSchema)