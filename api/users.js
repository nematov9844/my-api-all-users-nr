// const express = require('express');
// const app = express();

// app.use(express.json());

// let users = [];

// app.get('/api/users', (req, res) => {
//     res.json(users);
// });

// app.post('/api/users', (req, res) => {
//     const user = req.body;
//     users.push(user);
//     res.status(201).json(user);
// });

// module.exports = app;


const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // CORSni yoqish

app.use(express.json());

let users = [
    { first_name: "Jeki", last_name: "Tommy", age: 20, hobbies: "pianino" },
    { first_name: "Aisha", last_name: "Ali", age: 25, hobbies: "yog'och o'yish" },
    { first_name: "Omar", last_name: "Khan", age: 30, hobbies: "fotografiya" },
    { first_name: "Mariya", last_name: "Ivanova", age: 22, hobbies: "chizmachilik" },
    { first_name: "Samir", last_name: "Hussein", age: 28, hobbies: "velosiped minish" },
    { first_name: "Fatima", last_name: "Ahmed", age: 27, hobbies: "taom tayyorlash" },
    { first_name: "Daniel", last_name: "Smith", age: 32, hobbies: "badiiy adabiyot" },
    { first_name: "Elena", last_name: "Petrova", age: 24, hobbies: "sayohat qilish" },
    { first_name: "Ahmed", last_name: "Aliyev", age: 29, hobbies: "fitness" },
    { first_name: "Nargiza", last_name: "Yusupova", age: 26, hobbies: "pishiriqlar tayyorlash" }
];


app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
