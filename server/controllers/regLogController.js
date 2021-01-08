const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { OAuth2Client } = require("google-auth-library");

class RegLogController {
  static register(req, res, next) {
    const { username, password, email, userCity } = req.body;

    User.create({
      username,
      password,
      email,
      userCity,
    })
      .then((newUser) => {
        res.status(201).json({
          id: newUser.id,
          username: newUser.username,
          email: newUser.email,
          userCity: newUser.userCity,
        });
      })
      .catch((err) => {
        next(err)
      });
  }

  static login(req, res, next) {
    const { username, password } = req.body;
    User.findOne({
      where: {
        username,
      },
    })
      .then((user) => {
        if (!user) {
          next({ name: "AuthenticationError" })
        }
        else {
          const truePassword = comparePassword(password, user.password);
          if (!truePassword) {
            next({ name: "AuthenticationError" })
          } else {
            const payload = {
              id: user.id,
              username: user.username,
              email: user.email,
              userCity: user.userCity,
            };
            const access_token = createToken(payload);
            res.status(200).json({ access_token });
          }
        }
      })
      .catch((err) => {
        next(err)
      });
  }

  static loginGoogle(req, res, next) {
    const { id_token } = req.body;
    const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);
    let email, username;

    client
      .verifyIdToken({
        idToken: id_token,
        audience: process.env.OAUTH_CLIENT_ID,
      })
      .then((ticket) => {
        const payload = ticket.getPayload();
        // console.log(payload);
        username = payload.name
        email = payload.email;
        return User.findOne({
          where: { email }
        })
      })
      .then(user => {
        if (!user) {
          return User.create({
            username,
            password: Math.round(Math.random() * 1000000) + "trawispw",
            email,
            userCity: "Jakarta",
          })
        } else {
          return user;
        }
      })
      .then(user => {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
          userCity: user.userCity,
        };
        const access_token = createToken(payload);
        // console.log(access_token);
        res.status(200).json({ access_token });
      })
      .catch((err) => {
        // console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
      });
  }
}

module.exports = RegLogController;
