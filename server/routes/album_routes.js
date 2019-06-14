const express = require('express');
const router = express.Router();
const albums = require('../controllers/albums');

// get albums
router.get('/', albums.getAllAlbums);
router.get('/:userid', albums.getAlbums);

module.exports = router;