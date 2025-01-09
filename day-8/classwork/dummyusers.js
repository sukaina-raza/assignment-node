
import express from 'express';
// const express = require("express");
const app = express();

// Dummy users
const users = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "sana", age: 16 },
  { id: 3, name: "sana", age: 88 },
  { id: 4, name: "sana", age: 55 },
  { id: 5, name: "sana", age: 11 },
];

// Fetch all users
app.get("/users", (req, res) => res.send(users));

// Fetch user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.send("User not found");
  if (user.age < 18) return res.send("Access denied: User under 18");
  res.send(user);
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));
