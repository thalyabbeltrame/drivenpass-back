import { Credential as CredentialModel } from '@prisma/client';

import { ICredentialRequestDTO } from '../dtos/CredentialRequestDTO';
import { Credential } from '../entities/Credential';
import { credentialRepository } from '../repositories/credentialRepository';
import { AppError } from '../utils/AppError';
import { cryptUtils } from '../utils/cryptUtils';
import { businessRulesService } from './businessRulesService';

async function create(data: ICredentialRequestDTO): Promise<void> {
  await businessRulesService.checkIfUserIdExists(data.userId);

  const credential = await credentialRepository.findByUsernameAndTitle(
    data.username,
    data.title
  );
  if (credential) {
    throw new AppError('Credential already exists', 400);
  }

  const newCredential = new Credential(data);
  await credentialRepository.create(newCredential);
}

async function list(userId: number): Promise<CredentialModel[]> {
  await businessRulesService.checkIfUserIdExists(userId);

  const credentials = await credentialRepository.list(userId);
  const decryptedCredentials = credentials.map((credential) => ({
    ...credential,
    password: cryptUtils.decryptData(credential.password),
  }));

  return decryptedCredentials;
}

export const credentialService = {
  create,
  list,
};
