import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'accurax-super-secret-key-change-in-production';

export function requireAuth(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.userId = payload.userId;
    req.userEmail = payload.email;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

export function signToken(userId, email) {
  return jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '30d' });
}
