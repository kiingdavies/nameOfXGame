const express = require("express");
// const jwt = require("jsonwebtoken"); // for login verification
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const db = "";
// const jwt = require("jsonwebtoken"); // for login verification

require("../dbConfig");

//import bcrypt for password hashing
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");

const initializePassport = require("../passportConfig");

initializePassport(passport);

// this routes to http://localhost:3000/api
router.get("/", (req, res) => {
  res.send("Called From api.js route || The findr get route works");
});

router.get('/register', checkAuthenticated, (req, res) => {
  res.render('register');
});

router.get('/login', checkAuthenticated, (req, res) => {
  res.render('login');
});

router.get('/dashboard', checkNotAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.user.name }); //this returns the user's name from our DB
});

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/api/register
const rRegUsers = require(path.join(__dirname, "users", "register-user.js"));
router.post("/register", rRegUsers);

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/api/login
const rLoginUsers = require(path.join(__dirname, "users", "login-user.js"));
router.post(
  "/login",
  rLoginUsers,
  passport.authenticate("local", {
    successRedirect: "/users",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// this uses a get Method to send requests from frontend to the endpoint localhost:3000/api/users
const rGetUsers = require(path.join(__dirname, "users", "get-users.js"));
router.get("/users", rGetUsers);

// use these functions on register and login GET Methods
//if user is authenticated redirect them to the dashboard
function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

//if user is not authenticated redirect them to the login page
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
