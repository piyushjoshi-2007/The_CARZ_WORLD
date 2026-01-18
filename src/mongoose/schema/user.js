import mongoose from "mongoose";



const usersch = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  }
});



export const user=mongoose.model("user",usersch)