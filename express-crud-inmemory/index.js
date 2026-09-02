const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to read JSON bodies

// Sample in-memory data
let users = [
  { id: 1, name: 'Ayaan' },
  { id: 2, name: 'Fatima' },
  { id: 3, name: 'Zubeyr' }
];
//✅ CREATE (POST)
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});
//📥 READ (GET all)
app.get("/users", (req, res) => {
  res.json(users);
});

//📥 READ (GET one)
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

//✏️ UPDATE (PUT)
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).send("User not found");
  user.name = req.body.name;
  res.json(user);
});
//❌ DELETE

app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.send("User deleted");
});
