import mongoose from "mongoose";

const Schema = mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  listeners: Number,
  description: String,
  rating: Number
})

const model = mongoose.model('Audiobook', Schema)
export default model;
