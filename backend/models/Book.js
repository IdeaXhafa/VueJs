const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookSchema = new Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    price: {
      type: Number,
    },
    picture: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
    }
  },
  {
    collection: 'book',
  },
)

module.exports = mongoose.model('Book', bookSchema)