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

async function listById(cardId: number): Promise<Card | null> {
  const card = await prisma.card.findUnique({
    where: {
      id: cardId,
    },
  });

  return card;
}

async function deleteById(cardId: number): Promise<void> {
  await prisma.card.delete({
    where: {
      id: cardId,
    },
  });
}

export const cardRepository = {
  create,
  findByUserIdAndTitle,
  list,
  listById,
  deleteById,
};
