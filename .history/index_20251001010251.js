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


//to create a new note.
app.post('/notes',async(req,res)=>{
  const {title,content}=req.body;

const newPost=  new Post({id:id++,title,content});

 await newPost.save().then((savedPost)=>{

    res.status(201).json(savedPost);
 }).catch((error)=>{
    res.status(500).json({error:'Failed to create post'});
 })
});

//to retrieve all notes
app.get("/notes", async (req, res) => {
  try {
    const notes = await Post.find();
    let allNotes = [];

    for (let i = 0; i < notes.length; i++) {
      allNotes.push(notes[i]);
    }

    res.json(allNotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//to retrieve a specific note by ID.
app.get("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params; // get id from URL
    const note = await Post.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({
      title: note.title,
      content: note.content
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//to delete a note.
app.get('/notes/delete',async(res,req)=>{
 const {id}=req.params;


})

