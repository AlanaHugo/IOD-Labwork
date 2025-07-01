const express = require('express');
const { createUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/', createUser);

// Add this for testing in browser
router.get('/', getAllUsers);

module.exports = router;