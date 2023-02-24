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
    photoUrl: {
      type:String,
    },
    filePath: {
      type:String,
    }
  },
  {
    collection: 'book',
  },
)

module.exports = mongoose.model('Book', bookSchema)