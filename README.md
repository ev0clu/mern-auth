# **Blog app**

A simple authentication app has built with Node.js and Express.js framework. React is used to create frontend. The app uses mongoose ODM (Object Document Model). For authenticate the users, JWT is used. Additionally, in oder to make secure the password, bcrypt.js is used for the project.

The app feature is to let user to register, log in, log out and update profile.

### Demo: [Link]()

## Features

- Log in, log out, register and update profile
- JWT is used for authentication
- BcryptJS is used to secure the password
- React is used to render the DOM
- Redux toolkit is used for state management, redux query is used for fetching data from backend
- MongoDB uses to store data

## How to run from local repository

#### Developement mode

1. Clone the repository
2. Run `npm install` command in your terminal
3. Create .env file and add the following enviromental variables:

- `NODE_ENV=developement`
- `PORT=5000`
- `MONGO_URI=mongo uri`
- `JWT_SECRET=abc123`

4. Run `npm run dev` command in your terminal at the root folder
5. Frontend server running at `http://localhost:3000/`

#### Production mode

1. Clone the repository
2. Run `npm install` command in your terminal
3. Create .env file and add the following enviromental variables:

- `NODE_ENV=production`
- `PORT=5000`
- `MONGO_URI=mongo uri`
- `JWT_SECRET=abc123`

4. Run `npm run build` command in your terminal at the root folder to creat build in `frontend/dist` folder
5. Run `npm run server` command in your terminal at the root folder
6. Frontend server running at `http://localhost:5000/`

## Dependencies

#### Backend

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)

#### Frontend

- [React](https://react.dev/)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [React Toastify](https://www.npmjs.com/package/react-toastify)
- [Typescript](https://www.typescriptlang.org/)
- [React Bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [Bootstrap](https://www.npmjs.com/package/bootstrap)
- [React Router Bootstrap](https://www.npmjs.com/package/react-router-bootstrap)
- [React Redux](https://www.npmjs.com/package/react-redux)
- [Redux Toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
- [Vite](https://vitejs.dev/)
