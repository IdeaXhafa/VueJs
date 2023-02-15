const mongoose = require('mongoose')
const Schema = mongoose.Schema

let roleSchema = new Schema(
  {
    admin: {
    },
    user: {
    }
  },
  {
    collection: 'role',
  },
)

module.exports = mongoose.model('Role', roleSchema)