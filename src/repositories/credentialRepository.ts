import { Credential } from '@prisma/client';

import { ICredentialRequestDTO } from '../dtos/CredentialRequestDTO';
import { prisma } from '../prisma';

async function create(data: ICredentialRequestDTO): Promise<void> {
  await prisma.credential.create({
    data,
  });
}

async function findByUserIdAndTitle(
  userId: number,
  title: string
): Promise<Credential | null> {
  return await prisma.credential.findFirst({
    where: {
      userId,
      title,
    },
  });
}

async function list(userId: number): Promise<Credential[]> {
  return await prisma.credential.findMany({
    where: {
      userId,
    },
  });
}

async function listById(credentialId: number): Promise<Credential | null> {
  return await prisma.credential.findUnique({
    where: {
      id: credentialId,
    },
  });
}

async function deleteById(credentialId: number): Promise<void> {
  await prisma.credential.delete({
    where: {
      id: credentialId,
    },
  });
}

export const credentialRepository = {
  create,
  findByUserIdAndTitle,
  list,
  listById,
  deleteById,
};
