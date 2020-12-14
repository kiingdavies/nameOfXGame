const express = require("express");
const jwt = require("jsonwebtoken"); // for login verification
const router = express.Router();
const path = require('path');
// const User = require("../models/user");
const mongoose = require("mongoose");
const db = ""; 

// this routes to http://localhost:3000/api
router.get("/", (req, res) => {
    res.send("Called From api.js route || The findr get route works");
  });

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/api/register
const rRegUsers = require(path.join(__dirname, "users", "register-user.js"));
router.post('/register', rRegUsers);

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/api/login
const rLoginUsers = require(path.join(__dirname, "users", "login-user.js"));
router.post('/login', rLoginUsers);

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/api/users
const rGetUsers = require(path.join(__dirname, "users", "get-users.js"));
router.get('/users', rGetUsers);



module.exports = router;