Thoughts App
A simple full-stack application for sharing and managing thoughts. Users can create accounts, log in, post their thoughts, edit or delete them, and explore posts shared by others. The app features a secure authentication system using JWT, responsive design, and engagement features like liking posts.

Features
User Authentication: Register, log in, and log out securely using JWT and cookies.
Thought Sharing: Post, edit, and delete thoughts easily.
Post Likes: Like and unlike posts to engage with others.
Profile Management: View and manage user-specific posts.
View Posts Anonymously: Explore thoughts shared by other users without logging in.
Secure Backend: Passwords hashed using bcrypt and sessions managed via JWT.
Responsive Design: Sleek and mobile-friendly UI built with Tailwind CSS.
Tech Stack
Frontend
HTML
Tailwind CSS
EJS (Embedded JavaScript Templates)
Backend
Node.js
Express.js
Database
MongoDB (Mongoose ORM)
Authentication
JSON Web Tokens (JWT)
bcrypt
Hosting
Compatible with platforms like Vercel, Heroku, or Render.
Installation and Setup
Prerequisites
Node.js installed on your system.
MongoDB (local installation or access to a MongoDB Atlas cluster).
Git for version control.
Steps to Run Locally
Clone the Repository:

bash
Copy
Edit
git clone <repository-url>  
cd <repository-folder>  
Install Dependencies:

bash
Copy
Edit
npm install  
Configure Environment Variables:
Create a .env file in the root directory and add the following:

env
Copy
Edit
JWT_SECRET_KEY=your_secret_key  
MONGO_URI=your_mongo_connection_string  
Start MongoDB Locally or Connect to Atlas:
Ensure MongoDB is running and update the connection string in the backend code if required.

Run the Server:

bash
Copy
Edit
node app.js  
Access the Application:
Open your browser and navigate to:
http://localhost:8000

Usage
Register a New Account: Go to /register.
Login: Visit /login to access your profile at /profile.
Create Posts: Use the post creation form in the profile view.
Edit or Delete Posts: Navigate to /edit/:id or manage directly from your profile.
Explore Posts: Visit /thoughts to view others' posts.
Contributing
Contributions are welcome! Here's how you can contribute:

Fork the repository.
Create a new branch for your feature or fix:
bash
Copy
Edit
git checkout -b feature-name  
Commit your changes:
bash
Copy
Edit
git commit -m "Add a feature or fix"  
Push the branch:
bash
Copy
Edit
git push origin feature-name  
Open a pull request on GitHub.
How to Upload to GitHub
Initialize Git Repository (if not already done):

bash
Copy
Edit
git init  
Add All Files:

bash
Copy
Edit
git add .  
Commit Changes:

bash
Copy
Edit
git commit -m "Initial commit for Thoughts App"  
Connect to GitHub Repository:

bash
Copy
Edit
git remote add origin <repository-url>  
Push Code to GitHub:

bash
Copy
Edit
git branch -M main  
git push -u origin main  
License
This project is open-source and available under the MIT License.
