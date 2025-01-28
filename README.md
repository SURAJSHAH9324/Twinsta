Thoughts App

A simple full-stack application where users can create accounts, log in, share their thoughts, edit posts, and view posts from others. This app includes features like liking posts, updating user-generated content, and a secure authentication system using JWT.

Features

User Authentication: Secure registration, login, and logout functionality using JWT and cookies.

Thought Sharing: Users can post their thoughts, edit, and delete them.

Post Engagement: Like and unlike posts to show your engagement.

Profile Management: View and manage user-specific posts.

Explore Posts: Browse posts shared by other users anonymously.

Secure Backend: Passwords are hashed using bcrypt, and sessions are managed using JWT.

Responsive Design: Modern and mobile-friendly UI built with Tailwind CSS.

Tech Stack

Frontend

HTML

Tailwind CSS

EJS (Embedded JavaScript Templates)

Backend

Node.js

Express.js

Database

MongoDB (with Mongoose ORM)

Authentication

JSON Web Tokens (JWT)

bcrypt

Hosting

Can be deployed on platforms like Vercel, Heroku, or Render.

Installation and Setup

Prerequisites

Node.js installed on your system.

MongoDB (either locally installed or access to a MongoDB Atlas cluster).

Git for version control.

Steps to Run Locally

Clone the Repository:

git clone <repository-url>
cd <repository-folder>

Install Dependencies:

npm install

Configure Environment Variables:
Create a .env file in the root directory and add the following variables:

JWT_SECRET_KEY=your_secret_key
MONGO_URI=your_mongo_connection_string

Start MongoDB:
Ensure MongoDB is running locally or connected via MongoDB Atlas.

Start the Server:

node app.js

Access the Application:
Open your browser and navigate to:
http://localhost:8000

Usage

Register: Create a new account by visiting /register.

Login: Log in to your account via /login and access your profile at /profile.

Create Posts: Use the form on your profile page to share thoughts.

Edit/Delete Posts: Manage posts via /edit/:id or directly on your profile.

Explore: Browse public posts from others at /thoughts.

Contributing

We welcome contributions to improve this app! Follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix:

git checkout -b feature-name

Commit your changes:

git commit -m "Add feature or fix"

Push the branch to your fork:

git push origin feature-name

Open a pull request on GitHub.

Deployment to GitHub

Initialize the Git Repository (if not already done):

git init

Add All Files:

git add .

Commit the Changes:

git commit -m "Initial commit"

Connect to GitHub Repository:

git remote add origin <repository-url>

Push to GitHub:

git branch -M main
git push -u origin main

License

This project is open-source and available under the MIT License.
