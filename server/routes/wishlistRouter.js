const router = require('express').Router()
const WishlistController = require('../controllers/wishlistController')

router.get('/', WishlistController.getWish)

router.post('/', WishlistController.postWish)

router.put('/:idCity', WishlistController.putWish)

router.patch('/:idCity', WishlistController.patchWish)

router.delete('/:idCity', WishlistController.deleteWish)

module.exports = router

