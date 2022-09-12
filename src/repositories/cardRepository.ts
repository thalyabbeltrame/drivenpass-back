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
): Promise<Card | null> {
  return await prisma.card.findFirst({
    where: {
      userId,
      title,
    },
  });
}

async function list(userId: number): Promise<Card[]> {
  return await prisma.card.findMany({
    where: {
      userId,
    },
  });
}

async function listById(cardId: number): Promise<Card | null> {
  return await prisma.card.findUnique({
    where: {
      id: cardId,
    },
  });
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
