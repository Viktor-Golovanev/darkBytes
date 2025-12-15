const express = require('express');
const router = express.Router();
const adminPanelController = require('../adminControllers/adminControllers');


router.get('/admin', adminPanelController.getAdminPanel);

module.exports = router;