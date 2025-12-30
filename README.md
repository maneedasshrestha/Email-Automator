# Email Automator

A web application to automate the process of sending out emails to multiple recipients using a Next.js frontend and an Express/Nodemailer backend.

## Project Structure

- **client**: Next.js application (Frontend)
- **server**: Express.js application (Backend)

## Getting Started

### Prerequisites

- Node.js installed

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory with your email credentials:
   ```env
   PORT=5000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.
