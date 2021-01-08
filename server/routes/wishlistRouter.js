const router = require('express').Router()
const WishlistController = require('../controllers/wishlistController')
const { authorize } = require("../middlewares/auth")

router.get('/', WishlistController.getWish)

router.post('/', WishlistController.postWish)

router.put('/:idCity', authorize, WishlistController.putWish)

router.patch('/:idCity', authorize, WishlistController.patchWish)

router.delete('/:idCity', authorize, WishlistController.deleteWish)

module.exports = router

