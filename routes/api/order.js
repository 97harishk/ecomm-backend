const express = require('express')
const router = express.Router();
const orderController = require('../../controllers/api/order_controller')
router.get('/:userId', orderController.orders)
router.post('/create-order/:userId', orderController.addOrder)
// router.post('/remove-order/:userId', cartController.removeFromCart)
module.exports = router;