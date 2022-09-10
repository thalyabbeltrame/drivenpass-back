import { Request, Response } from 'express';

import { credentialService } from '../services/credentialService';

async function createCredential(req: Request, res: Response) {
  const { url, username, password, title } = req.body;
  const userId = parseInt(res.locals.userId);

  await credentialService.createCredential({
    userId,
    url,
    username,
    password,
    title,
  });
  res.status(201).send('Credential created with success');
}

async function listCredentials(_req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);

  const credentials = await credentialService.listCredentials(userId);
  res.status(200).json(credentials);
}

async function listCredentialById(req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);
  const credentialId = parseInt(req.params.credentialId) || 0;

  const credential = await credentialService.listCredentialById(
    userId,
    credentialId
  );
  res.status(200).json(credential);
}

async function deleteCredentialById(req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);
  const credentialId = parseInt(req.params.credentialId) || 0;

  await credentialService.deleteCredentialById(userId, credentialId);
  res.status(200).send('Credential deleted with success');
}

export const credentialController = {
  createCredential,
  listCredentials,
  listCredentialById,
  deleteCredentialById,
};
