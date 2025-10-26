# Task Management System

A backend application to manage daily tasks efficiently. Built with **Node.js**, **Express.js**, and **MongoDB**.

## Overview

The Task Management System allows users to create, view, update, delete, and analyze tasks. It provides RESTful API endpoints for all CRUD operations and basic analytics.

## Key Features

- **Create Tasks:** Add a new task with `title`, `description`, `status`, and `dueDate`.
- **View Tasks:** Fetch all tasks or filter by `status` (`pending`, `in-progress`, `completed`).
- **Update Tasks:** Modify existing tasks or mark them as completed.
- **Delete Tasks:** Remove tasks permanently from the database.
- **Analytics (Bonus):**
  - Get a count of tasks by their status.
  - View overdue tasks.

## Tech Stack

| Component        | Technology Used            |
|-----------------|----------------------------|
| Backend Framework| Node.js + Express.js       |
| Database         | MongoDB                    |
| ODM              | Mongoose                   |
| Environment Config | dotenv                   |
| Utilities        | cors, nodemon (for dev)    |


## Project Structure

```
task_management/
│
├── server.js
├── .env
├── models/
│ └── taskModel.js
├── routes/
│ └── taskRoutes.js
└── controllers/
└── taskController.js
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/tasks` | Create a new task |
| GET    | `/api/tasks` | Get all tasks |
| GET    | `/api/tasks?status=completed` | Filter tasks by status |
| PUT    | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |
| GET    | `/api/tasks/summary` | Get analytics summary |

---

## Sample JSON (Task)

```json
{
  "title": "Complete AI Project",
  "description": "Finish the backend module of the AI system",
  "status": "in-progress",
  "dueDate": "2025-10-30T18:00:00Z"
}
```

## Example Analystics Response
```json
{
  "counts": {
    "pending": 3,
    "in-progress": 2,
    "completed": 5
  },
  "overdueCount": 1,
  "overdueTasks": [
    {
      "_id": "671b2d998a48c8d7fa2c52f7",
      "title": "Submit Report",
      "status": "pending",
      "dueDate": "2025-10-20T09:00:00.000Z"
    }
  ]
}
```
##  How to Run

1. Clone or download the project folder.

2. Install dependencies:
```bash
npm install
```

3. Configure .env file:
```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/tasksdb
```

4. Start the server:
```bash
npm run dev
```

5. Test API endpoints using Postman or curl.