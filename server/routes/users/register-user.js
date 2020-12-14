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
    } else {
      // create a payload and token from jwt
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  });
}; // end module
