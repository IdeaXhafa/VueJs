import mongoose from "mongoose";

const Schema = mongoose.Schema({
  userName: String,
  email: String,
  price: Number,
  card: Number
})

const model = mongoose.model('Pay', Schema)
export default model;
