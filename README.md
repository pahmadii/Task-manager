# Task-manager

A simple RESTful API built with Node.js and Express.js to manage tasks. This project allows users to create, read, update, and delete tasks. 

## Features
- Create new tasks
- Get a list of all tasks
- Update existing tasks
- Delete tasks
- Built with **Express.js** and **MongoDB**

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) - Install the latest version of Node.js.
- [MongoDB](https://www.mongodb.com/) - Install MongoDB locally or use a cloud database like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Steps

1. Clone the repository:

 git clone https://github.com/pahmadii/Task-manager.git
   
2.Navigate to the project folder:

cd node-express-api


3.Install dependencies:

npm install


4.Set up environment variables: Create a .env file in the root of the project and add the following:



MONGO_URI=your_mongodb_connection_string
PORT=8080


5.Run the application:
node app

6.Access the API at http://localhost:8080.

API Endpoints
GET /api/v1/tasks: Retrieve a list of all tasks.
POST /api/v1/tasks: Create a new task.
GET /api/v1/tasks/:id: Get a specific task by ID.
PATCH /api/v1/tasks/:id: Update an existing task.
DELETE /api/v1/tasks/:id: Delete a task.


Creating a Task
POST /api/v1/tasks
{
  "title": "Finish Homework",
  "description": "Complete math homework before Monday"
}


Get All Tasks
GET /api/v1/tasks


Update Task
PUT /api/v1/tasks/5f4d9d19e4b0c4a3c9b56f3f
{
  "title": "Finish Homework",
  "description": "Complete math homework and study for the test"
}


Delete Task
DELETE /api/v1/tasks/5f4d9d19e4b0c4a3c9b56f3f


Contact
GitHub:https://github.com/pahmadii
