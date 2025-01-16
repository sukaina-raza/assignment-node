import express from "express"
import bodyParser from 'body-parser';
const app = express();
const port = 2000;

app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Hardcoded users list
const users = [
  { username: 'ali', password: '123' },
  { username: 'sara', password: '456' },
  { username: 'sana', password: '789' },
];

// Render the login page
app.get('/', (req, res) => {
  res.render('login', { error: null });
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and password matches
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.render('welcome', { username });
  } else {
    res.render('login', { error: 'Invalid username or password!' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
