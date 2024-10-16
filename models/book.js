import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  pages: { type: Number, required: true },
  publishedDate: { type: Date, default: Date.now }
});

// Add an index on the title field
bookSchema.index({ title: 1 });

const Book = mongoose.model('Book', bookSchema);

export default Book;
