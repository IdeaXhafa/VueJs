import mongoose from "mongoose";

const Schema = mongoose.Schema({
  userId: String,
  data: Date,
  type: String,
  description: String,
})

const model = mongoose.model('Pink', Schema)
export default model;
