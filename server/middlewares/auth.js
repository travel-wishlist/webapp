const { checkToken } = require("../helpers/jwt");
const { User } = require("../models");

function authenticate(req, res, next) {
  try {
    if (!req.headers.access_token) {
      res.status(401).json({ message: "Please login" });
    }
    const decoded = checkToken(req.headers.access_token);
    User.findOne({
      where: {
        username: decoded.username,
        email: decoded.email,
      },
    })
      .then((user) => {
        console.log(user);
        if (!user) {
          res.status(401).json({ message: "Please login" });
        } else {
          req.user = {
            id: user.id,
            username: user.username,
            email: user.email,
            userCity: user.userCity,
          };
          next();
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
      });
  } catch (error) {
    res.status(401).json({ message: "Please login" });
  }
}

function authorize(req, res, next) {}

module.exports = { authenticate, authorize };
