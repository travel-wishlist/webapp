const { User } = require("../models")

class UserController {
  static updateUser(req, res, next){
    const {username, email, userCity} = req.body;

    User.update({
      username,
      email,
      userCity
    }, {
      where: {
        id: req.user.id
      },
      returning: true
    }).then(response => {
      res.status(200).json(response);
    }) .catch(err => {
      res.send(err)
    })
  }

}

module.exports = UserController
