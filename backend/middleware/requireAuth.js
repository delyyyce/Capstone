const jwt = require('jsonwebtoken');

module.exports = function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'No token' });

  const token = authHeader.split(' ')[1];
  console.log('Received Token:', token);
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    console.log('Decoded User:', user);
    next();
  } catch {
    console.log('Token verification failed', err); 
    return res.status(403).json({ error: 'Invalid token' });
  }
};
