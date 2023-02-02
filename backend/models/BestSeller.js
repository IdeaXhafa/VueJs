const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bestsellerSchema = new Schema(
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
  },
  {
    collection: 'bestsellers',
  },
)

module.exports = mongoose.model('BestSeller', bestsellerSchema)