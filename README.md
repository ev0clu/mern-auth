# **Blog app**

A simple blog app has built with Node.js and Express.js framework. React is used to create render the DOM. The app uses mongoose ODM (Object Document Model). For authenticate the users, passport.js is used. Additionally, in oder to make secure the password, bcrypt.js is used for the project.

The app feature is to let every visitor to view every posts, but only logged in members can write comments.

### Demo: [Link]()

## Features

- Create, read, update and delete posts by the blog author
- JWT is used for authentication
- BcryptJS is used to secure the password
- React is used to render the DOM
- Redux toolkit is used for state management, redux query is used for fetching data from backend
- MongoDB uses to store data

## How to run from local repository

1. Clone the repository
2. Run `npm install` command in your terminal
3. Create .env file and add a new enviromental variable named MONGODB_URL and paste your own mongoDB connection link
4. Run `npm run start` command in your terminal
5. Server running at `http://localhost:3000/`

### How to populate mongoDB database

- Run `node populatedb.js <MONGODB_URL>` in your terminal from the project root folder

## Dependencies

#### Backend

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler/)
- [express-validator](https://www.npmjs.com/package/express-validator)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [date-nfs](https://date-fns.org/)
- [Passport.js](https://www.passportjs.org/)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)

#### Frontend

- [React](https://react.dev/)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

### Layout

# ![layout picture](https://github.com/ev0clu/mern-blog/blob/main/layout.png?raw=true)
