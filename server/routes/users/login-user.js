const User = require("../../models/user.js");
const jwt = require("jsonwebtoken"); // for login verification

module.exports = (req, res) => {
  // res.send('You have reached the login user route it works!$$');

  let userData = req.body;

  // The findOne Method checks the mongodb to see if the entered email from the frontend exists in the db
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log("Error!" + error);
    } else {
      if (!user) {
        res.status(401).send("Invalid email");
      } else if (user.password != userData.password) {
        res.status(401).send("Invalid password");
      } else {
        // create a payload and token from jwt
        let payload = { subject: user._id };
        let token = jwt.sign(payload, "secretKey");
        console.log(`Message: Email ${userData.email} was logged in successfully`);
        res.status(200).send({ token });
      }
    }
  });
}; // end module
