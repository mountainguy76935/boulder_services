const express = require('express');
const adminController = require('../controller/admin')
const router = express.Router();

router.post('/', adminController.postAddResource);
router.get('/data/resources', adminController.getResources);
router.post('/edit-resource', adminController.postEditResource);
router.post('/delete-resource', adminController.postDeleteResource)

module.exports = router