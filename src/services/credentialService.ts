import { ICredentialRequestDTO } from '../dtos/CredentialRequestDTO';
import { Credential } from '../entities/Credential';
import { credentialRepository } from '../repositories/credentialRepository';
import { AppError } from '../utils/AppError';
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

export const credentialService = {
  create,
};
