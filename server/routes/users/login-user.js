const passport = require('passport');

const initializePassport = require('../../passportConfig');

initializePassport(passport);

module.exports = (req, res) => {
    res.send('You have reached the login user route it works!$$');
}; // end module