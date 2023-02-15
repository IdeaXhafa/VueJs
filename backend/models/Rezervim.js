const mongoose = require('mongoose')
const Schema = mongoose.Schema

let rezervimSchema = new Schema(
  {
    CreatedAt: {
      type: DateTime,
    },
    DeletedAt: {
      type: DateTime,
    },
    K_id: {
      type: Number,
    },
    B_id: {
        type: Number,
    },
    isAvctive: {
      type: Boolean,
    }
  },
  {
    collection: 'rezervimi',
  },
)

module.exports = mongoose.model('Rezervimi', rezervimSchema)

