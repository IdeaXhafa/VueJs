import mongoose from "mongoose";

const Schema = mongoose.Schema({
  userId: String,
  title: String,
  author: String,
  price: Number,
  listeners: Number,
  description: String,
  rating: Number
})

const model = mongoose.model('Saved', Schema)
export default model;