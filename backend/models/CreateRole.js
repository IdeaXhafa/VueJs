const mongoose = require('mongoose')
const Schema = mongoose.Schema

let createRoleSchema = new Schema(
  {
    roleName: {
      type: String,
    }
  },
  {
    collection: 'createrole',
  },
)

module.exports = mongoose.model('Createrole', createRoleSchema)