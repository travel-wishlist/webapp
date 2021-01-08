const { User } = require("../models");
const { createToken } = require("../helpers/jwt");

class UserController {
  static updateUser(req, res, next) {
    const { username, email, userCity } = req.body;

    User.update(
      {
        username,
        email,
        userCity,
      },
      {
        where: {
          id: req.user.id,
        },
        returning: true,
      }
    )
      .then((response) => {
        if (response[0] === 1) {
          req.user = {
            id: response[1][0].id,
            username: response[1][0].username,
            email: response[1][0].email,
            userCity: response[1][0].userCity,
          };
          console.log(req.user);
          const access_token = createToken(req.user);
          res.status(200).json({ access_token });
        } else {
          res.json(response);
        }
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = UserController;
