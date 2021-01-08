
const router = require("express").Router();
const UserRouter = require("./userRouter");
const WishlistRouter = require("./wishlistRouter");
const RegLogController = require("../controllers/regLogController");
const { authenticate } = require("../middlewares/auth");
const ApiController = require ('../controllers/apiController')


router.post("/register", RegLogController.register);

router.post("/login", RegLogController.login);

router.post("/loginGoogle", RegLogController.loginGoogle);

router.get('/openWeatherApi/:cityName', ApiController.weather)

router.get('/getCity', ApiController.cityList)

router.get('/getNews/:cityName', ApiController.newsList)

router.use(authenticate);

// routing API



router.get('/newsApi', (req, res) => {

})

router.get('/worldTimeApi', (req, res) => {

})


router.get("/newsApi", (req, res) => {});

router.get("/worldTimeApi", (req, res) => {});

router.use("/users", UserRouter);
router.use("/wishlists", WishlistRouter);

module.exports = router;
