const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// In-memory store
let notes = [];
let idCounter = 1;

// 👉 Create a new note
app.post("/note", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const newNote = { id: idCounter++, title, content };
  notes.push(newNote);

  res.status(201).json(newNote);
});

// //to retrieve all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

//to retrieve a specific note by ID.
app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
});

// 👉 Update a note (PUT = replace full note)
app.put("/notes/:id", (req, res) => {

  const { id,title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
 for(var i=0;i<notes;i++){
  notes=note
 }
  note.title = title;
  note.content = content;

  res.json(note);
});

//to delete a note.
app.delete("/notes/:id", (req, res) => {
  const noteIndex = notes.findIndex((n) => n.id === parseInt(req.params.id));
  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes.splice(noteIndex, 1);
  res.json({ message: "Note deleted successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
