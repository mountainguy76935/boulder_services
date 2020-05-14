const express = require('express');
const adminController = require('../controller/admin')
const router = express.Router();

router.post('/', adminController.postAddResource);
router.get('/data/resources', adminController.getResources)

module.exports = router