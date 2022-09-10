import { Credential } from '@prisma/client';

import { ICredentialRequestDTO } from '../dtos/CredentialRequestDTO';
import { prisma } from '../prisma';

async function create(data: ICredentialRequestDTO): Promise<void> {
  await prisma.credential.create({
    data,
  });
}

async function findByUsernameAndTitle(
  username: string,
  title: string
): Promise<Credential | null> {
  return await prisma.credential.findFirst({
    where: {
      username,
      title,
    },
  });
}

export const credentialRepository = {
  create,
  findByUsernameAndTitle,
};
