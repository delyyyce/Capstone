const { Review, Item } = require('../models');

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createReview = async (req, res) => {
  try {
    const { itemId, rating, body } = req.body; 
    const userId = req.user.id;

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(400).json({ error: 'Item not found' });
    }

    const review = await Review.create({
      userId,
      itemId,
      rating,
      body,   
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
