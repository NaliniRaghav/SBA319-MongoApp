
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import express from 'express';
// //import sampleData from './data/sampleData.js ';

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 3000;

// // ===== Connect to DB ===== //
// try {
//     await mongoose.connect(process.env.MONGODB_URI);
    
//     console.log(`Connected to mongodb`);
//     //To pooulate inital data in the database
//    // await sampleData();

// } catch (error) {
//     console.error(error);  
// }

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import sampleData from './data/sampleData.js ';

// Importing routes
import books from './routes/books.js';
import users from './routes/users.js';
import authors from './routes/authors.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// // ===== Connect to DB ===== //
try {
     await mongoose.connect(process.env.MONGODB_URI);
    
     console.log(`Connected to mongodb`);
//     //To pooulate inital data in the database
//    // await sampleData();

 } catch (error) {
     console.error(error);  
 }


// Middleware to parse JSON
app.use(express.json());


// Use the imported routes
app.use('/api/books', books);   // Book routes
app.use('/api/users', users);   // User routes
app.use('/api/authors', authors); // Author routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
