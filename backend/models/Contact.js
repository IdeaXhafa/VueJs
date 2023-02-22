const mongoose = require('mongoose')
const Schema = mongoose.Schema

let contactSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    }
  },
  {
    collection: 'contact',
  },
)

module.exports = mongoose.model('Contact', contactSchema)