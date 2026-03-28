# NEXON Engineering Admin Dashboard

A complete admin dashboard for managing NEXON Engineering website content.

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB

## Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

## Quick Start

### 1. Install Dependencies

```bash
npm install
cd server && npm install
cd ../client && npm install
```

### 2. Configure Environment

Edit `server/.env` with your MongoDB connection:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/nexon_engineering
SESSION_SECRET=your-secret-key-here
```

### 3. Start MongoDB

Make sure MongoDB is running locally or you have your Atlas connection string ready.

### 4. Run the Application

```bash
# Development mode (with hot reload)
npm run dev

# Or production mode
npm run start
```

## Access Points

- **Website**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **API Server**: http://localhost:3000/api

## Default Login

```
Username: admin
Password: admin123
```

## Features

- **Dashboard**: Real-time statistics overview
- **Pages**: Control page visibility and edit content
- **Projects**: Full CRUD for portfolio items
- **Clients**: Manage client logos
- **Messages**: View contact form submissions
- **Settings**: Configure company info, contact details, social links

## Images

Images are stored in the `/images` folder and served at `http://localhost:3000/images/`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/check` - Check auth status

### Users (Admin only)
- `GET /api/users` - List users
- `POST /api/users` - Create user
- `PATCH /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Settings
- `GET /api/settings` - Get settings
- `PUT /api/settings` - Update settings

### Pages
- `GET /api/pages` - List all pages
- `GET /api/pages/public` - Public pages only
- `PUT /api/pages/:slug` - Update page

### Projects
- `GET /api/projects` - List projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Clients
- `GET /api/clients` - List clients
- `POST /api/clients` - Create client
- `PUT /api/clients/:id` - Update client
- `DELETE /api/clients/:id` - Delete client

### Messages
- `GET /api/messages` - List messages
- `POST /api/messages` - Submit message (public)
- `PATCH /api/messages/:id` - Update status
- `DELETE /api/messages/:id` - Delete message

### Stats
- `GET /api/stats` - Dashboard statistics

## Project Structure

```
├── server/                 # Express backend
│   ├── index.js           # Server entry point
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Auth middleware
│   └── .env              # Environment config
├── client/                # React frontend
│   ├── src/
│   │   ├── components/   # Layout
│   │   ├── pages/        # Dashboard, Pages, Projects, etc.
│   │   ├── context/     # AuthContext
│   │   └── utils/       # API utility
│   └── dist/            # Built files
├── images/               # Website images
├── public/               # Website static files
└── package.json
```
