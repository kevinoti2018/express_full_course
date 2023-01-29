const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', refreshTokenController.handleRefreshToken);

module.exports = router;