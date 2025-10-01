const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors');
const connectDB=require('./db/connect');
const Post=require('./Models/post');

app.use(express.json());
app.use(cors());

connectDB().then(()=>{

})
const PORT=process.env.PORT || 3000;



app.post('/notes',(req,res)=>{
  const {title,content}=req.body;
 const newPost= new Post
})