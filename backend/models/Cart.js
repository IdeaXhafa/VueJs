import mongoose from "mongoose";

const Schema = mongoose.Schema({
  userId: String,
  title: String,
  author: String,
  price: Number,
  isAvailable: String,
  photoUrl: String,
  filePath: String,
})

const model = mongoose.model('Cart', Schema)
export default model;

