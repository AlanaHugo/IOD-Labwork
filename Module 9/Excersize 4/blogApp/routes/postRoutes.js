const express = require('express');
const { createPost, likePost } = require('../controllers/postController');
const router = express.Router();

router.post('/', createPost);
router.put('/:id/like', likePost);
module.exports = router;