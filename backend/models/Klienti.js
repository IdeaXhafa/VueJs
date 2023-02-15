const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Klientichema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: String,
    }
  },
  {
    collection: 'Klienti',
  },
)

module.exports = mongoose.model('Klienti', Klientichema)

