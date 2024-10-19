// server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Read the JSON file
const readData = () => {
  const data = fs.readFileSync('db.json');
  return JSON.parse(data);
};

// Write to the JSON file
const writeData = (data) => {
  fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
};

// Get users
app.get('/users', (req, res) => {
  const users = readData().users;
  res.json(users);
});

// Update user by ID
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  const users = readData().users;

  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = updatedUser; 
    writeData({ users });
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
