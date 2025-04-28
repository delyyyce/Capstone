const { Comment } = require('../models');

exports.getCommentsByReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const comments = await Comment.findAll({ where: { reviewId } });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { body } = req.body;
    const userId = req.user.id;

    const comment = await Comment.create({ body, reviewId, userId });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
