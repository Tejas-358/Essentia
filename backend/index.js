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
    const { email } = req.body;
    console.log('Email:', email); // Log the email
    
    UserModel.findOne({ email })
        .then(user => {
            console.log('User:', user); // Log the user found
            if (user) {
                console.log('User already exists');
                res.status(400).json({ message: "Email already exists" });
            } else {
                UserModel.create(req.body)
                    .then(newUser => {
                        console.log('New user created:', newUser);
                        res.json(newUser);
                    })
                    .catch(err => {
                        console.error('Error creating user:', err);
                        res.status(500).json(err);
                    });
            }
        })
        .catch(err => {
            console.error('Error finding user:', err);
            res.status(500).json(err);
        });
});

app.listen(3001, () => {
    console.log("Server Started!");
});
