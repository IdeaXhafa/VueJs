const mongoose = require('mongoose')
const Schema = mongoose.Schema

let audiobookSchema = new Schema(
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
    listeners: {
      type: Number,
    }
  },
  {
    collection: 'audiobook',
  },
)

module.exports = mongoose.model('Audioook', audiobookSchema)