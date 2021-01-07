const router = require("express").Router();
const UserRouter = require("./userRouter");
const WishlistRouter = require("./wishlistRouter");
const RegLogController = require("../controllers/regLogController");
const { authenticate } = require("../middlewares/auth");

router.post("/register", RegLogController.register);

router.post("/login", RegLogController.login);

router.post("/loginGoogle", (req, res) => {});

router.use(authenticate);

// routing API
router.get("/openWeatherApi/:cityName", (req, res) => {});

router.get("/newsApi", (req, res) => {});

router.get("/worldTimeApi", (req, res) => {});

router.use("/users", UserRouter);
router.use("/wishlists", WishlistRouter);

module.exports = router;
