### Project Overview: Real Estate MERN Stack Application

**Frontend Project Name:** Real Estate Application to Buy, Sell, and Rent Property  
**Backend Project Name:** Real Estate MERN  
**Version:** Frontend: 1.0.0, Backend: 1.0.0  
**Private:** Yes (Frontend)  
**License:** ISC (Backend)  
**Module Type:** ES Module  

### Project Description: Real Estate Application to Buy, Sell, and Rent Property

This Real Estate application is a full-stack MERN project designed to provide a seamless platform for users to buy, sell, and rent properties. The frontend is developed using React, ensuring a dynamic and responsive user interface. It incorporates Redux for state management, React Router for navigation, and Tailwind CSS for styling.

The backend is powered by Express.js, with MongoDB as the database, offering a scalable and robust solution for handling user data, property listings, and transactions. The application also utilizes JWT for secure user authentication, and Nodemon for efficient development workflows.

This project is ideal for real estate businesses looking to enhance their digital presence or for developers seeking to build a comprehensive property management system.

### Technologies and Packages Used

#### Frontend:
- **React:** Version 18.2.0 - A JavaScript library for building user interfaces.
- **React DOM:** Version 18.2.0 - Handles DOM manipulation in React applications.
- **React Router DOM:** Version 6.23.0 - Manages routing in the application.
- **React Icons:** Version 5.2.0 - Provides popular icons as React components.
- **Redux Toolkit:** Version 2.2.5 - State management with Redux.
- **React Redux:** Version 9.1.2 - Connects React components to Redux.
- **Redux Persist:** Version 6.0.0 - Persists the Redux state across sessions.
- **Axios:** Version 1.7.2 - A promise-based HTTP client for making requests to APIs.
- **SweetAlert2:** Version 11.11.0 - For beautiful, responsive, customizable, and accessible alerts.
- **SweetAlert2 React Content:** Version 5.0.7 - Integrates SweetAlert2 with React components.
- **Swiper:** Version 11.1.4 - A modern mobile touch slider with hardware-accelerated transitions.
- **Firebase:** Version 10.12.1 - For authentication, database, and other backend services.
- **Bootstrap:** Version 5.3.3 - A CSS framework for responsive web design.
- **Prop Types:** Version 15.8.1 - Type checking for React props.

**Styling:**
- **Tailwind CSS:** Version 3.4.3 - A utility-first CSS framework.
- **Autoprefixer:** Version 10.4.19 - A PostCSS plugin that adds vendor prefixes to CSS rules.
- **PostCSS:** Version 8.4.38 - A tool for transforming CSS with JavaScript plugins.
- **@tailwindcss/line-clamp:** Version 0.4.4 - A Tailwind CSS plugin to truncate text with an ellipsis after a set number of lines.

**Development Tools:**
- **Vite:** Version 5.2.0 - A fast build tool and development server.
- **ESLint:** Version 8.57.0 - A tool for identifying and fixing problems in JavaScript code.
  - **ESLint Plugin React:** Version 7.34.1 - Enforces React-specific linting rules.
  - **ESLint Plugin React Hooks:** Version 4.6.0 - Enforces rules of Hooks.
  - **ESLint Plugin React Refresh:** Version 0.4.6 - Optimizes fast refresh in React.

**TypeScript Support:**
- **@types/react:** Version 18.2.66 - TypeScript type definitions for React.
- **@types/react-dom:** Version 18.2.22 - TypeScript type definitions for React DOM.

**Build Tools:**
- **@vitejs/plugin-react-swc:** Version 3.5.0 - Vite plugin for integrating React with SWC for fast compilation.

#### Backend:
- **Express:** Version 4.19.2 - A web framework for Node.js.
- **MongoDB:** Version 6.6.2 - A NoSQL database for storing application data.
- **Mongoose:** Version 8.4.0 - An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (jsonwebtoken):** Version 9.0.2 - For handling authentication via JSON Web Tokens.
- **BcryptJS:** Version 2.4.3 - For hashing passwords.
- **Cookie-Parser:** Version 1.4.6 - Parses cookies attached to the client request object.
- **CORS:** Version 2.8.5 - A middleware for enabling Cross-Origin Resource Sharing.
- **Dotenv:** Version 16.4.5 - For loading environment variables from a `.env` file.
- **Nodemon:** Version 3.1.0 - Automatically restarts the Node.js server on file changes.
- **Concurrently:** Version 8.2.2 - Runs multiple commands concurrently in a single npm script.

### Combined Scripts
- **`dev`:** Runs both the backend and frontend development servers concurrently.
- **`dev:backend`:** Starts the backend development server using Nodemon.
- **`dev:frontend`:** Starts the frontend development server using Vite.
- **`build`:** Builds the frontend for production.
- **`lint`:** Runs ESLint to check for code issues in the frontend.
- **`preview`:** Previews the production build of the frontend.
- **`start`:** Starts the backend server using Node.js.

This project is a full-stack MERN application that leverages modern technologies to provide a comprehensive solution for buying, selling, and renting properties. The frontend is built using React and related technologies, while the backend is powered by Express and MongoDB, ensuring robust and scalable development.
