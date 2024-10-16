import Book from '../models/book.js';
import Author from '../models/author.js';
import User from '../models/user.js';

async function sampleData() {
  try {
    // Clear existing data (optional)
    await Book.deleteMany({});
    await Author.deleteMany({});
    await User.deleteMany({});

    // Sample Authors
    const author1 = new Author({ name: 'John Doe', birthdate: '1980-01-01' });
    const author2 = new Author({ name: 'Jane Smith', birthdate: '1975-06-15' });
    const author3 = new Author({ name: 'George Orwell', birthdate: '1903-06-25' });
    await author1.save();
    await author2.save();
    await author3.save();

    // Sample Books
    const book1 = new Book({ title: 'Book One', author: author1._id, pages: 300 });
    const book2 = new Book({ title: 'Book Two', author: author2._id, pages: 250 });
    const book3 = new Book({ title: 'Book Three', author: author3._id, pages: 200 });
    const book4 = new Book({ title: 'Book Four', author: author1._id, pages: 400 });
    const book5 = new Book({ title: 'Book Five', author: author2._id, pages: 350 });
    await book1.save();
    await book2.save();
    await book3.save();
    await book4.save();
    await book5.save();

    // Sample Users
    const user1 = new User({ username: 'user1', password: 'password1', email: 'user1@example.com' });
    const user2 = new User({ username: 'user2', password: 'password2', email: 'user2@example.com' });
    const user3 = new User({ username: 'user3', password: 'password3', email: 'user3@example.com' });
    const user4 = new User({ username: 'user4', password: 'password4', email: 'user4@example.com' });
    const user5 = new User({ username: 'user5', password: 'password5', email: 'user5@example.com' });
    await user1.save();
    await user2.save();
    await user3.save();
    await user4.save();
    await user5.save();

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

// Export the function so it can be imported in other files
export default sampleData;

//notes :
// //lsof -i :3000
// //kill -9 <PID>