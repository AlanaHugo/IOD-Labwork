const { Post, User, Comment } = require('../models');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body); // Make sure UserId is included in req.body
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Like a post (many-to-many)
exports.likePost = async (req, res) => {
  const { id: postId } = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findByPk(postId);
    const user = await User.findByPk(userId);

    if (!post || !user) {
      return res.status(404).json({ error: 'Post or user not found' });
    }

    const alreadyLiked = await post.hasLiker(user);
    if (alreadyLiked) {
      return res.status(400).json({ error: 'User already liked this post' });
    }

    await post.addLiker(user);
    res.json({ message: 'Post liked successfully' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all posts (with user and comments)
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, attributes: ['id', 'username'] },
        { model: Comment, attributes: ['id', 'text', 'UserId'] }
      ]
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['id', 'username'] },
        { model: Comment, include: [{ model: User, attributes: ['username'] }] }
      ]
    });

    if (!post) return res.status(404).json({ error: 'Post not found' });

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
