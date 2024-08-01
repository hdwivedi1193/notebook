# NotedBook App

Welcome to the NotedBook app! This project is designed to help learners understand several important concepts in modern web development, including:

- **React Context API** for state management
- **Express.js** and **Node.js** for backend development
- **JWT (JSON Web Tokens)** for authentication
- **Password encryption** for secure authentication
- **CRUD operations** (Create, Read, Update, Delete) for managing notes
- **React Hooks** such as `useEffect` and `useRef` for functional component state management and side effects

## Project Overview

The NotedBook app is a notebook application that allows users to create, update, read, and delete notes. Users can securely log in and sign up to manage their notes individually. This app demonstrates how to build a full-stack application with user authentication and personalized data access.

## Key Concepts Covered

1. **React Context API**: Learn how to manage global state in React applications without prop drilling.
2. **Express.js & Node.js**: Get practical experience building RESTful APIs and handling server-side logic.
3. **JWT (JSON Web Tokens)**: Understand how to secure API endpoints and manage user authentication.
4. **Password Encryption**: Explore techniques to securely handle user passwords.
5. **React Hooks**: Use `useEffect` to manage side effects and `useRef` for accessing DOM elements.
6. **Authentication Context**: Manage authentication state and user data using React Context API.

## Features

- **Create**: Add new notes to your notebook.
- **Read**: View existing notes.
- **Update**: Edit and save changes to existing notes.
- **Delete**: Remove notes from the notebook.
- **Login/Signup**: Secure user authentication with login and signup functionality.
- **User-Specific Notes**: Each user can view and manage their own notes.

## Technologies Used

- **Frontend**: React, Context API, `useEffect`, `useRef`
- **Backend**: Node.js, Express.js
- **Authentication**: JWT
- **Password Encryption**: bcrypt

## Installation

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/notedbook-app.git
    cd notedbook-app/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `frontend` directory and add the following environment variables:
    ```
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Start the development server:
    ```bash
    npm start
    ```

### Backend Setup

1. Navigate to the `backend` directory:
    ```bash
    cd notedbook-app/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

1. Open the frontend application in your browser (usually at `http://localhost:3000`).
2. Register a new user or log in with existing credentials.
3. Use the provided UI to create, view, update, and delete your notes. Each user can only manage their own notes.

## Example API Endpoints

- **POST api/auth/create/user**: Register a new user
- **POST /api/auth/login**: Log in an existing user
- **POST /api/notes/create**: Create a new note (authenticated)
- **GET /api/notes/all**: Retrieve all notes for the logged-in user
- **PUT /api/notes/update/:id**: Update a specific note (authenticated)
- **DELETE /api/notes/delete/:id**: Delete a specific note (authenticated)

## Auth Context

To manage authentication state and user data, the app utilizes an **Auth Context**. This context provides methods for logging in, signing up, and tracking the current user's authentication state throughout the application.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!