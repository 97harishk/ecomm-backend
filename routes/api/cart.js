const express = require('express')
const router = express.Router();
const cartController = require('../../controllers/api/cart_controller')
router.get('/cart-item/:userId', cartController.cartItem)
router.post('/create-cart/:userId', cartController.addToCart)
router.post('/remove-cart/:userId', cartController.removeFromCart)
module.exports = router;