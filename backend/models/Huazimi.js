const mongoose = require('mongoose')
const Schema = mongoose.Schema

let huazimSchema = new Schema(
  {
    DataPritjes: {
      type: DateTime,
    },
    DataKthimit: {
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
    collection: 'huazimi',
  },
)

module.exports = mongoose.model('Huazimi', huazimSchema)
