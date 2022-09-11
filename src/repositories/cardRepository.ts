import { Card } from '@prisma/client';

import { ICardRequestDTO } from '../dtos/CardRequestDTO';
import { prisma } from '../prisma';

async function create(data: ICardRequestDTO): Promise<void> {
  await prisma.card.create({
    data,
  });
}

async function findByUserIdAndTitle(
  userId: number,
  title: string
): Promise<ICardRequestDTO | null> {
  const card = await prisma.card.findFirst({
    where: {
      userId,
      title,
    },
  });

  return card;
}

async function list(userId: number): Promise<Card[]> {
  const cards = await prisma.card.findMany({
    where: {
      userId,
    },
  });

  return cards;
}

export const cardRepository = {
  create,
  findByUserIdAndTitle,
  list,
};
