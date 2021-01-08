const router = require('express').Router()
const UserController = require('../controllers/userController')

// routingan User di bawah ini
router.put('/:id', UserController.updateUser)

module.exports = router
