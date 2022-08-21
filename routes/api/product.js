const express = require('express')
const router = express.Router();
const productController = require('../../controllers/api/product_controller')
router.get('/', productController.products)
router.get('/:id', productController.productByID)
router.post('/create-product', productController.create);
module.exports = router;