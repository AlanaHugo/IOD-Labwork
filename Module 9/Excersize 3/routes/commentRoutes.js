const express = require('express');
const { addComment } = require('../controllers/commentController');
const router = express.Router();
const { getAllComments } = require('../controllers/commentController');

router.post('/', addComment);
router.get('/', getAllComments);

module.exports = router;
