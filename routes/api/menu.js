const express = require('express')
const router  = express.Router();
const menuController = require('../../controllers/api/menu_controller')
router.get('/', menuController.menu )
router.post('/create', menuController.create )

module.exports = router