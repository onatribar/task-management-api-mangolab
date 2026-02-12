const express = require("express");
const app = express();

app.use(express.json());

const tasks = [];

app.post("/tasks", (req, res) => {
  const { title, completed = false } = req.body;

  if (!title) {
    return res.status(400).json({ error: "title is required" });
  }

  const task = {
    title,
    completed,
    createdAt: new Date()
  };

  tasks.push(task);
  res.status(201).json(task);
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});