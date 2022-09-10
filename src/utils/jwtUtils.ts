import { User } from '@prisma/client';
import jwt, { JwtPayload } from 'jsonwebtoken';

import '../config/index';
import { AppError } from './AppError';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

function generateToken(user: User): string {
  const token = jwt.sign({ userId: user.id }, 'secret', {
    expiresIn: '1d',
  });

  return token;
}

function verifyToken(token: string): string | JwtPayload {
  return jwt.verify(token, JWT_SECRET);
}

export const jwtUtils = {
  generateToken,
  verifyToken,
};
