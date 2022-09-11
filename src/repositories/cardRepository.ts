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

export const cardRepository = {
  create,
  findByUserIdAndTitle,
};
