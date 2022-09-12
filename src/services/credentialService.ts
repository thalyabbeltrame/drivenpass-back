import { Credential as CredentialModel } from '@prisma/client';

import { ICredentialRequestDTO } from '../dtos/CredentialRequestDTO';
import { Credential } from '../entities/Credential';
import { credentialRepository } from '../repositories/credentialRepository';
import { AppError } from '../utils/AppError';
import { cryptUtils } from '../utils/cryptUtils';
import { authService } from './authService';

async function createCredential(data: ICredentialRequestDTO): Promise<void> {
  await authService.checkIfUserIdExists(data.userId);

  const credential = await credentialRepository.findByUserIdAndTitle(
    data.userId,
    data.title
  );
  if (credential) {
    throw new AppError('Credential already exists', 400);
  }

  const newCredential = new Credential(data);
  await credentialRepository.create(newCredential);
}

async function listCredentials(userId: number): Promise<CredentialModel[]> {
  await authService.checkIfUserIdExists(userId);

  const credentials = await credentialRepository.list(userId);
  const decryptedCredentials = credentials.map((credential) => ({
    ...credential,
    password: cryptUtils.decryptData(credential.password),
  }));

  return decryptedCredentials;
}

async function listCredentialById(
  userId: number,
  credentialId: number
): Promise<CredentialModel> {
  await authService.checkIfUserIdExists(userId);

  const credential = await credentialRepository.listById(credentialId);
  if (!credential) {
    throw new AppError('Credential not found', 404);
  }

  if (credential.userId !== userId) {
    throw new AppError('Credential does not belong to the user', 403);
  }

  const decryptedCredential = {
    ...credential,
    password: cryptUtils.decryptData(credential.password),
  };

  return decryptedCredential;
}

async function deleteCredentialById(
  userId: number,
  credentialId: number
): Promise<void> {
  await authService.checkIfUserIdExists(userId);

  const credential = await credentialRepository.listById(credentialId);
  if (!credential) {
    throw new AppError('Credential not found', 404);
  }

  if (credential.userId !== userId) {
    throw new AppError('Credential does not belong to the user', 403);
  }

  await credentialRepository.deleteById(credentialId);
}

export const credentialService = {
  createCredential,
  listCredentials,
  listCredentialById,
  deleteCredentialById,
};
