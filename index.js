import express from'express'
import cors from 'cors';
import mongoose from'mongoose'
import {user} from './src/mongoose/schema/user.js'

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost/rba').then(()=>console.log("Connected")).catch((err)=> console.log("Error:", err))



app.post('/register',async (req,res)=>{

const {body}=req;

const newuser= new user(body);
const saveuser=await newuser.save();
res.status(201).send("Data added")


})
app.listen(5000,()=>{
  console.log("Server started")
})