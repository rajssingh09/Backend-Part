// server.js
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");
const Post = require("./Models/post");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Connect DB & Start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
  });

// 👉 Create Note
app.post("/notes", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

// 👉 Get all Notes
app.get("/notes", async (req, res) => {
  try {
    const notes = await Post.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 👉 Get Note by ID
app.get("/notes/:id", async (req, res) => {
  try {
    const note = await Post.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 👉 Update Note (PUT)
app.put("/notes/:id", async (req, res) => {
  try {
    const updatedNote = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedNote) return res.status(404).json({ message: "Note not found" });
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  Delete Note
app.delete("/notes/:id", async (req, res) => {
  try {
    const deletedNote = await Post.findByIdAndDelete(req.params.id);
    
    if (!deletedNote) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
