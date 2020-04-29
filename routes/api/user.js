const express = require('express')
const router = express.Router()
const login_registerController = require('../../controllers/api/auth_controller')
router.post('/login', login_registerController.login );
router.post('/autoLogin/:localId', login_registerController.autoLogin );
router.post('/register',login_registerController.register );
module.exports = router;