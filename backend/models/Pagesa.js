const mongoose = require('mongoose')
const Schema = mongoose.Schema

let pagesSchema = new Schema(
  {
    DataPageses: {
      type: DateTime,
    },
    K_id: {
      type: Number,
    }
  },
  {
    collection: 'pagesa',
  },
)

module.exports = mongoose.model('Pagesa', pagesSchema)

