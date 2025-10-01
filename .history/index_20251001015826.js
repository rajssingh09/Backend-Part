//Backend With DataBase(MongoDB);

const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
const Post = require('./Models/post');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000; 

connectDB()
.then(() => {
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
})
.catch((error) => {
console.error('Failed to connect to the database', error);
});

//to create a new note.
app.post('/notes', async (req, res) => {
const { title, content } = req.body;

try {

const newPost = new Post({ title, content });


const savedPost = await newPost.save();
res.status(201).json(savedPost);


} catch (error) {
res.status(500).json({ error: 'Failed to create post' });
}
});

//to retrieve all notes
app.get('/notes', async (req, res) => {
try {
const notes = await Post.find();




} catch (err) {
res.status(500).json({ message: err.message });
}
});

//to retrieve a specific note by ID.
app.get('/notes/:id', async (req, res) => {
try {
const { id } = req.params; // get id from URL
const note = await Post.findById(id);


if (!note) {
  return res.status(404).json({ message: 'Note not found' });
}

res.json({
  title: note.title,
  content: note.content,
});


} catch (err) {
res.status(500).json({ message: err.message });
}
});

//to Update a Note
app.put('/notes/:id',async(req,res)=>{
 try{
 const {id}=req.params;
 const Update=await Post.findById(id).select({title:title,content:content})
 if(!Update){
    res.status(500).json
 }

 }catch(err){
    console.log()
 }

})

//to delete a note.
app.delete('/notes/:id', async (req, res) => {
try {
const { id } = req.params; // get id from URL
const deletedNote = await Post.findByIdAndDelete(id);


if (!deletedNote) {
  return res.status(404).json({ message: 'Note not found' });
}

res.json({ message: 'Note deleted successfully' });


} catch (err) {
res.status(500).json({ message: err.message });
}
});
