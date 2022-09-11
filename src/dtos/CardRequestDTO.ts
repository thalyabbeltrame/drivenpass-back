import { Card } from '@prisma/client';

export type ICardRequestDTO = Omit<Card, 'id' | 'createdAt'>;
