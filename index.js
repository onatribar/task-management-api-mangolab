const express = require("express");
const app = express();

app.use(express.json());

// basic error handling
app.use((err, req, res, next) => {
  if (err?.type === "entity.parse.failed") {
    return res.status(400).json({ error: "Invalid JSON body" });
  }
  next(err);
});

const tasks = [];

// POST /tasks : create a new task
app.post("/tasks", (req, res) => {
  const { title, completed = false } = req.body;

  // basic validation
  if (typeof title !== "string" || title.trim().length === 0) {
    return res
      .status(400)
      .json({ error: "title must be a non-empty string" });
  }

  if (typeof completed !== "boolean") {
    return res
      .status(400)
      .json({ error: "completed must be a boolean" });
  }

  const task = {
    title: title.trim(),
    completed,
    createdAt: new Date()
  };

  tasks.push(task);
  res.status(201).json(task);
});

// GET /tasks : return tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// start server
const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;