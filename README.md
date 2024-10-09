# Personal blogging platform
A personal blogging application built with Node.js and Express that allows user to post, Read, update and Delete a blog.


---

## Setup Instructions


---


### Prerequisites
- Node.js 20.x
- Express 5.0
- React 18.x
- MongoDB 8.0

### Installation

   1. #### Clone the repository:
      ```bash 
      git clone https://github.com/Neme88/MyPage.git
      cd Mypage
      ```
   2. #### Initialize the Project:
      ```bash
      npm init -y
      ```
   3. #### List of Dependecies:
      - express: Fast web framework for Node.js
      - Mongoose: Object modeling tool, designed to work in asynchtonous environment
      - jsonwebtoken: JSON Web Token for Authentication, Authorization, Information Exchange, Statless session
      - bcrytjs: Library for hashing passwords in Node.js
      - cors: Node.js middleware for Enabling CORS(Cross Origin Resourse Sharing)
      - dotenv: Loads Environment variables from a .env file into process.env.

   4. #### Install Dependecies:
      ```bash
      npm install express
      npm install mongoose
      npm install jsonwebtoken
      npm install bcryptjs
      npm install cors
      npm install dotenv
      ```
   5. #### Check the package.json File:
   After installing these dependencies, they will be automatically added to the package.json file, under the " dependecies" section. It will look something like this:
```bash
  {

   "name": "Mypage",
   "version": "1.0.0",
   "description": "",
   "main": "index.js",
   "script": {
   "start": "node index.js"
   },
   "dependecies": {
   "express": "^4.17.1",
   "mongoose": "^5.11.15",
   "jsonwebtoken": "^8.5.1",
   "bcryptjs": "^2.4.3",
   "cors": "^2.8.5",
   "dotenv": "8.2.0"
   }
}

```
   6. #### Setup
   To run appliction, you'll need to set up the mongoDB database and start the server.


   7. #### Database Connection
   Ensure that you have a MongoDB URI for your database. You can use the following connection string in you `.env` file:
   ```bash
   MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority":
   ```

   Replace:
   ```bash
   <Username>, <password>, <cluster>, and <database> with your actual MongoDB.
   ```

   Example connection in the application:
   ```bash
   mongoose.connect("mongdb+srv://<your username>:<your password>@hostname.identifier for mongoDB cluster instance.mongodb.net/name of db?retryWrites=true&w=majority");
   ```
   8. #### Starting the server
   To start the server, run the following command:
   ```bash
   npm start
   ```
   9. ## Tech Stack

      #### Frontend

      - React.js
      - Bootstrap

      #### Backend

      - Node.js 
      - MongoDB

      #### Libraries/Packages

      - Dotenv (for environment variables)
      - npm (dependency management)


   10. ### API Endpoints


   #### Authentication

   - Post bash /api/auth/register: Register a new user. 
   - Post bash /api/auth/login: Login an existing user.


   11. #### Blog Posts

   - GET /posts:Retrieve all blog posts.
   - GET /posts/singlePost/:postId: Retrieve a specific blog post by it's ID.
   - POST /posts/:create: Create a new blog post.
   - PUT /posts/:id: Update an existing blog post by it's ID
   - DELETE /posts/:id: Delete a blog by it's ID.


   ### Contributing.
   Contributions are welcome! Feel free to open an issue or submit a pull request.


   ### License. 
This project is licensed under the MIT License.

<<<<<<< HEAD
<<<<<<< HEAD
=======
### Author
**Chinemerem .C.Nwaka**
- **Email: ccnwaka1988@gmail.com**
- **Linkedin: https://www.linkedin.com/in/Neme88/**
- **GitHub: https://github.com/Neme88**
- **X: https://x.com/Neme_88**

>>>>>>> a4befae4352bdb93d29aa7f8bd7407ef84eca687
=======

## Contact
For any inquiries, suggestions, or feedbsck, feel free to reach out.
### Author 

**Chinemerem .C. Nwaka**

- **Email**: [ccnwaka1988@gmail.com](mailto:ccnwaka1988@gmail.com)
- **GitHub**: [https://github.com/Neme88](https://github.com/Neme88)
- **LinkedIn**: [https://www.linkedin.com/in/Neme88/](https://www.linkedin.com/in/Neme88/)
- **X**: [https://x.com/Neme_88](https://x.com/Neme_88)





>>>>>>> 0f2afb963e2205437b4f6e99c275a8db737292be
