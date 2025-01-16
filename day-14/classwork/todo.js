import express from 'express';
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// In-memory To-Do List (temporary storage)
let todos = ['wake up on time','complete all the tasks','be organized'];

// 1. Get all tasks
app.get('/todos', (req, res) => {
  res.json(todos);
});

// 2. Add a new task
app.post('/todos', (req, res) => {
  const task = req.body.task; // Get the task from the request body

  if (!task) {
    return res.status(400).send('Task is required');
  }

  todos.push(task); // Add the task to the list
  res.send('Task added successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`To-Do app running at http://localhost:${port}`);
});
