const errorHandler = (err, req, res, next) => {
  if (err) {
    let errorMessage = {
      messages: []
    }
    switch (err.name) {
      case "SequelizeValidationError" || "SequelizeConstraintError":
        errorMessage.messages = err.errors.map(err => err.message)
        res.status(400).json(errorMessage)
        break
      case "AuthenticationError":
        errorMessage.messages.push("Wrong username / password.")
        res.status(401).json(errorMessage)
      case "ResourceNotFound":
        errorMessage.messages.push("Not found.")
        res.status(404).json(errorMessage)
        break
      case "AuthorisationError":
        res.status(401).json({ message: "Not authorised." })
      //case "axiosError":
      //break
      default:
        errorMessage.messages.push("Internal server error.")
        res.status(500).json(errorMessage)
        break
    }
  }
}

module.exports = errorHandler
