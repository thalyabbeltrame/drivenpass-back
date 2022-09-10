import { User } from '@prisma/client';

import { IUserRequestDTO } from '../dtos/UserRequestDTO';
import { prisma } from '../prisma';

async function create(data: IUserRequestDTO): Promise<void> {
  await prisma.user.create({
    data,
  });
}

async function findByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function findById(id: number): Promise<User | null> {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export const userRepository = {
  create,
  findByEmail,
  findById,
};
