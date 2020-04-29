const express = require('express')
const router = express.Router();
const categoryController = require('../../controllers/api/category_controller')
router.get('/', categoryController.category);
router.post('/create-category', categoryController.create);
router.delete('/delete-category/:id', categoryController.delete);

module.exports = router;