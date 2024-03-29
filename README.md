MyPage Backend
This repository contains the backend code for Mypage, a blogging application built with Node.js and Express.

Dependencies
express: Fast, un-opinionated, minimalist web framework for Node.js.
mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
jsonwebtoken: JSON Web Token implementation for Node.js.
bcryptjs: Library for hashing passwords in Node.js.
cors: Node.js middleware for enabling CORS (Cross-Origin Resource Sharing) with various options.
dotenv: Loads environment variables from a .env file into process.env.
Installation
Clone the repository:

bash
Copy code
git clone <https://github.com/Neme88/MyPage/tree/main/server>
Install dependencies:

bash
Copy code
npm install
Usage
Set up your MongoDB database and add your database connection URI to the .env file:

plaintext
Copy code
MONGODB_URI=<mongoose.connect( "mongodb+srv://ccnwaka1988:YN8Hg6PhDme4HQI6@mypagedb0.arn4ch4.mongodb.net/newmypagedb?retryWrites=true&w=majority");>
Start the server:

bash
Copy code
npm start
Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in an existing user.
Blog Posts
GET http//localhost:3002/posts: Get all blog posts.
GET http//localhost:3002/posts/singlePost/:postId Get a specific blog post by ID.
POST http//localhost:3002/posts/create: Create a new blog post.
PUT http//localhost:3002 /posts/:id: Update an existing blog post.
DELETE http//localhost:3002/posts/:id: Delete a blog post by ID.
Comments

Contributions are welcome! Feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.






