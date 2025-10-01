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
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
}).catch((error)=>{
    console.error('Failed to connect to the database',error);
});

const PORT=process.env.PORT || 3000;



app.post('/notes',(req,res)=>{
  const {title,content}=req.body;
const newPost= new Post({id:id++,title,content});
 newPost.save().then((savedPost)=>{
    res.status(201).json(savedPost);
 }).catch((error)=>{
    res.status(500).json({error:'Failed to create post'});
 })
});

app.get('/notes',(req,res)=>{
for(var i=0;i<Post.length();i++){
const data[]=
}
})

app.