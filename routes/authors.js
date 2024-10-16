import express from 'express';
import Author from '../models/author.js';   
const router = express.Router();

// GET '/api/authors' - Retrieve all authors
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST '/api/authors' - Add a new author
router.post('/', async (req, res) => {
  const { name, birthdate } = req.body;
  const newAuthor = new Author({ name, birthdate });
  try {
    const savedAuthor = await newAuthor.save();
    res.status(201).json(savedAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PATCH '/api/authors/:id' - Update an author by ID
router.patch('/:id', async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAuthor) return res.status(404).json({ message: 'Author not found' });
    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE '/api/authors/:id' - Delete an author by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    if (!deletedAuthor) return res.status(404).json({ message: 'Author not found' });
    res.status(200).json({ message: 'Author deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;


 