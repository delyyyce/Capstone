const express = require('express');
const router = express.Router();
const { Review } = require('../models');
const reviewController = require('../controllers/reviewController');
const requireAuth = require('../middleware/requireAuth');

router.get('/', reviewController.getAllReviews);
router.post('/', requireAuth, reviewController.createReview);

router.put('/:id', requireAuth, async (req, res) => {
  const review = await Review.findByPk(req.params.id);
  if (!review || review.userId !== req.user.id) return res.status(403).send('Forbidden');

  review.text = req.body.text;
  review.rating = req.body.rating;
  await review.save();
  res.json(review);
});

router.delete('/:id', requireAuth, async (req, res) => {
  const review = await Review.findByPk(req.params.id);
  if (!review || review.userId !== req.user.id) return res.status(403).send('Forbidden');
  await review.destroy();
  res.json({ message: 'Deleted' });
});

router.get('/user/:userId', async (req, res) => {
  const reviews = await Review.findAll({ where: { userId: req.params.userId } });
  res.json(reviews);
});

module.exports = router;
