import mongoose from "mongoose";

const Schema = mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  listeners: Number,
  description: String,
  rating: Number,
  photoUrl: String,
  filePath: String
})

const model = mongoose.model('Audiobook', Schema)
export default model;
