# MeetMax Frontend

## Overview

This repository contains the frontend implementation for the MeetMax project. The application includes the Authentication and Feed screens, developed according to the provided design specifications. It connects to a backend server to handle authentication and other functionalities.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Assumptions](#assumptions)
- [Backend Server](#backend-server)
- [Simulating Backend API](#simulating-backend-api)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- **Authentication Screen:**

  - Implemented Sign Up and Login forms with comprehensive validation.
  - Users must be authenticated to access the Feed screen.
  - Implemented with post and also comment by users.

- **Feed Screen:**

  - Displayed posts and comments using backend data from the server.
  - Optional features implemented:
    - Liking posts and comments.
    - Creating new posts.
    - Adding comments to existing posts.
  - Real-time updates using state management.

- **Responsive Design:**
  - The application is fully responsive, ensuring a seamless experience across various screen sizes.

## Technologies Used

- **Next.js:** A React framework for server-side rendering and static site generation.
- **Redux RTK Query:** For state management and for making API calls to handle real-time updates.
- **Firebase:** For handling authentication and real-time database services.
- **Framer Motion:** For adding animations to enhance user interactions.
- **Tailwind CSS:** For styling the application and ensuring responsive design.
- **React Hook Form:** For handling form state and validation.
- **React Toastify:** For adding toast notifications.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rakibulhasanbu/meetmax.git
   ```
2. Navigate to the project directory:
   ```bash
   cd meetmax
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Project

To start the development server, run:

```bash
npm run dev
```
