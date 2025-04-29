const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');

console.log('📦 Loaded DB config:', {
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT
});


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

