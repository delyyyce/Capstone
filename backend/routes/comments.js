const express = require('express');
const router = express.Router();
const { Comment } = require('../models');
const commentController = require('../controllers/commentController');
const requireAuth = require('../middleware/requireAuth');

router.get('/:reviewId', commentController.getCommentsByReview);
router.post('/:reviewId', requireAuth, commentController.addComment);

router.post('/', requireAuth, async (req, res) => {
  try {
    const { reviewId, text } = req.body;
    const comment = await Comment.create({ userId: req.user.id, reviewId, text });
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', requireAuth, async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  if (!comment || comment.userId !== req.user.id) return res.status(403).send('Forbidden');

  comment.text = req.body.text;
  await comment.save();
  res.json(comment);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  if (!comment || comment.userId !== req.user.id) return res.status(403).send('Forbidden');

  await comment.destroy();
  res.json({ message: 'Deleted' });
});

router.get('/user/:userId', async (req, res) => {
  const comments = await Comment.findAll({ where: { userId: req.params.userId } });
  res.json(comments);
});

module.exports = router;
