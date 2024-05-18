
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/upImage', imageController.imageUpload);
router.get('/getImages', imageController.getAllImages);
router.get('/getImage/:id', imageController.getImage); // New route for getting a single image and incrementing view count

module.exports = router;
