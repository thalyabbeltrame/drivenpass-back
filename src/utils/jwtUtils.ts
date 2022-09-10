import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

export function generateToken(user: User): string {
  const token = jwt.sign({ userId: user.id }, 'secret', {
    expiresIn: '1d',
  });

  return token;
}
