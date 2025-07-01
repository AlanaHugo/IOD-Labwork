const express = require('express');
const postController = require('../controllers/postController'); // Import full controller object
const router = express.Router();

router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/:id/likes', postController.likePost);

module.exports = router;
