import mongoose from "mongoose";

const Schema = mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
})

const model = mongoose.model('Contact', Schema)
export default model;
