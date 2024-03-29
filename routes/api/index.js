const express = require('express')
const router = express.Router()
router.use('/user', require('./user') );
router.use('/menu', require('./menu'));
router.use('/category', require('./category') );
router.use('/product', require('./product') );
router.use('/cart', require('./cart') );
router.use('/order', require('./order') );
module.exports = router;