const express = require('express');
const app = express();

app.use(express.json());

let users = [];

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

module.exports = app;
