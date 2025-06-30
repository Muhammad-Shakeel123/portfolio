# My Portfolio

This is my personal portfolio project showcasing my skills, experience, and projects as a MERN stack developer.

## Author

Muhammad Shakeel

## Technologies Used

- **Backend:** Node.js, Express, CORS, dotenv, Nodemailer
- **Frontend:** React, Vite, Tailwind CSS, React Router, Framer Motion, React Icons, React Leaflet, React Toastify, React Confetti, React Scroll, React Vertical Timeline Component, Typewriter Effect
- **Others:** Axios for API requests, ESLint for linting

## Project Structure

```
/ (root)
├── index.js                 # Backend server entry point
├── package.json             # Backend dependencies and scripts
├── controllers/             # Backend controllers
├── routes/                  # Backend routes
├── client/                  # React frontend application
│   ├── package.json         # Frontend dependencies and scripts
│   ├── src/                 # React source code
│   ├── public/              # Public assets and static files
│   └── ...                  
└── README.md                # This file
```

## Installation and Setup

### Backend

1. Navigate to the root directory:
   ```bash
   cd d:/myportfolio
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your environment variables (e.g., PORT, email credentials for Nodemailer).
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
4. The frontend will proxy API requests to the backend server running on port 8080.

## Available Scripts

### Backend

- `npm run dev` - Runs the backend server using Node.js.

### Frontend (inside `client` folder)

- `npm run dev` - Runs the frontend development server with Vite.
- `npm run build` - Builds the frontend for production.
- `npm run preview` - Previews the production build.
- `npm run lint` - Runs ESLint to check for code quality issues.

## Features

- Responsive and modern portfolio website built with React and Tailwind CSS.
- Interactive UI with animations and effects using Framer Motion and other libraries.
- Contact form integrated with backend using Nodemailer for email sending.
- Showcases education, work experience, projects, and technical skills.
- Uses React Router for smooth navigation.
- Includes maps and timelines for enhanced presentation.

## License

This project is licensed under the ISC License.
