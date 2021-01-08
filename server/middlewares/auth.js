const { checkToken } = require("../helpers/jwt");
const { User } = require("../models");

// cek isi dari access_token dan masukkan user data ke req.user apabila sesuai dengan database
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

// cek apakah user id di req.params sesuai dengan user id di req.user
function authorize(req, res, next) {
  const id = +req.params.id
  User.findOne({
    where: { id }
  })
  .then(user => {
    if(user.id === req.user.id){
      next()
    }
    else{
      res.status(401).json({message: "Unauthorized"});
    }
  })
  .catch(err => {
    res.status(500).json({message: "Internal Server Error"})
  })

}

module.exports = { authenticate, authorize };
