const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PhotoSchema = new Schema(
  {
    Photo: {
      type: String,
    },
    Filepath: {
        type: String
    }
  },
  {
    collection: 'Photo',
  },
)

module.exports = mongoose.model('Photo', PhotoSchema)
