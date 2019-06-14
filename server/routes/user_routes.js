const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

// USER INFO
router.get('/', users.getUsers);
router.get('/:userid', users.getUserById);

module.exports = router;