const mongoose = require('mongoose')
const Schema = mongoose.Schema

let magazineSchema = new Schema(
  {
    title: {
      type: String,
    },
    company: {
      type: String,
    },
    picture: {
      type: String,
    },
    description: {
      type: String
    }
  },
  {
    collection: 'magazine',
  },
)

module.exports = mongoose.model('Magazine', magazineSchema)