import mongoose from "mongoose";

const Schema = mongoose.Schema({
  userId: String,
  title: String,
  author: String,
  price: Number,
  isAvailable: String
})

const model = mongoose.model('Pay', Schema)
export default model;
