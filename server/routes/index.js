const router = require('express').Router()
const UserRouter = require('./userRouter')
const WishlistRouter = require('./wishlistRouter')
const apiController = require ('../controllers/apiController')

router.post('/register', (req, res) => {

})

router.post('/login', (req, res) => {

})

router.post('/loginGoogle', (req, res) => {

})
// routing API
router.get('/openWeatherApi/:cityName', apiController.weather)

router.get('/newsApi', (req, res) => {

})

router.get('/worldTimeApi', (req, res) => {

})

router.use('/users', UserRouter)
router.use('/wishlists', WishlistRouter)



module.exports = router
