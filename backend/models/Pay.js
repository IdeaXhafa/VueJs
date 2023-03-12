import mongoose from "mongoose";

const Schema = mongoose.Schema({
  card: Number,
  price: Number,
})

const model = mongoose.model('Pay', Schema)
export default model;
