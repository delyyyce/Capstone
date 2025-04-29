require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth');  // Correct CommonJS import
const itemsRouter = require('./routes/items');
const reviewsRouter = require('./routes/reviews');
const commentsRouter = require('./routes/comments');
const userRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('🎉 Capstone API is live!');
});

app.use('/api/auth', authRouter);
app.use('/api/items', itemsRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/user', userRouter); 

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

