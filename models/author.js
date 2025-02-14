import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: { type: Date, required: true },
});

const Author = mongoose.model('Author', authorSchema);
export default Author;
