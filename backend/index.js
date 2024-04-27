const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const UserModel = require('./models/Customers.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/fashion");

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ message: "Success", username: user.username });
                } else {
                    res.json({ message: "Password is Incorrect" });
                }
            } else {
                res.json({ message: "No User Found" });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
        });
});

app.post('/signup', (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server Started!");
});
