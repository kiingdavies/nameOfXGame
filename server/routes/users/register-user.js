const User = require("../../models/user.js");
const jwt = require("jsonwebtoken"); // for login verification

module.exports = (req, res) => {
  // res.send('You have reached the register user route it works!!!');
  
  let userData = req.body; // retreves the data inputted in frontend
  let user = new User(userData); // passes the data into a new instance of the imported User class that Mongoose understands

  user.save((error, registeredUser) => {
    // this saves the entered data into Mongodb
    if (error) {
      console.log("Error! " + error);
    } 
  //   if (userData.email === registeredUser) {
  //     console.log(`Error: Email ${registeredUser.email} already registered`);
  //     return res.status(400).send({ msg: 'The email address you have entered is already associated with another account.' });
  //     // res.redirect("/login");
  // } 
  else {
      // create a payload and token from jwt
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretKey");
      console.log(`Message: Email ${registeredUser.email} was registered successfully`);
      res.status(200).send({ token });
    }
  });
}; // end module
