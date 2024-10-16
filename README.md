 SBA319-MongoApp
 
 MongoDB Database Application: Books, Authors, and Users

This application is a Node.js and MongoDB-based API for managing a collection of books, authors, and users. The API provides full CRUD operations on these data collections.

Packages to Install:
express, mongoose, dotenv, nodemon 
Database created : sba319Librarydb

API Routes

1. POST Requests

POST /api/authors
URL: http://localhost:3000/api/authors
Body:json {
  "name": "J.K. Rowling",
  "birthdate": "1965-07-31"
}
POST /api/books
URL: http://localhost:3000/api/books
Body:json{
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "AUTHOR_OBJECT_ID",  // Replace with a valid author ObjectId
  "pages": 223,
  "publishedDate": "1997-06-26"
}
POST /api/users
URL: http://localhost:3000/api/users
Body:json{
  "username": "harry_potter_fan",
  "password": "supersecretpassword",
  "email": "harry@example.com"
}
2. PATCH Requests

PATCH /api/authors/
URL: http://localhost:3000/api/authors/AUTHOR_OBJECT_ID (replace AUTHOR_OBJECT_ID with a valid author ObjectId)
Body:json{
  "name": "J.K. Rowling Updated"
}
PATCH /api/books/
URL: http://localhost:3000/api/books/BOOK_OBJECT_ID (replace BOOK_OBJECT_ID with a valid book ObjectId)
Body:json{
  "title": "Harry Potter and the Chamber of Secrets",
  "pages": 251
}
PATCH /api/users/

URL: http://localhost:3000/api/users/USER_OBJECT_ID (replace USER_OBJECT_ID with a valid user ObjectId)
Body:json{
  "email": "harryupdated@example.com"
}
3. GET Requests

GET /api/authors
URL: http://localhost:3000/api/authors
This will fetch all authors.
GET /api/books
URL: http://localhost:3000/api/books
This will fetch all books with their corresponding authors populated.
GET /api/users
URL: http://localhost:3000/api/users
This will fetch all users.
4. DELETE Requests
DELETE /api/authors/

URL: http://localhost:3000/api/authors/AUTHOR_OBJECT_ID (replace AUTHOR_OBJECT_ID with a valid author ObjectId)
This will delete the author with the given ObjectId.
DELETE /api/books/

URL: http://localhost:3000/api/books/BOOK_OBJECT_ID (replace BOOK_OBJECT_ID with a valid book ObjectId)
This will delete the book with the given ObjectId.
DELETE /api/users/

URL: http://localhost:3000/api/users/USER_OBJECT_ID (replace USER_OBJECT_ID with a valid user ObjectId)
This will delete the user with the given ObjectId.

 
## GitHub Repository

  Repository URL:  (https://github.com/your-username/SBA319-MongoApp)
