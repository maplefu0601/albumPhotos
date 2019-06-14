const express = require('express');
const router = express.Router();
const photos = require('../controllers/photos');

// get photos
router.get('/', photos.getAllPhotos);
router.get('/:albumid', photos.getPhotos);

module.exports = router;