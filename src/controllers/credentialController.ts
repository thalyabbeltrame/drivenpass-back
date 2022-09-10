import { Request, Response } from 'express';

import { credentialService } from '../services/credentialService';

async function create(req: Request, res: Response) {
  const { url, username, password, title } = req.body;
  const userId = parseInt(res.locals.userId);

  await credentialService.create({ userId, url, username, password, title });
  res.status(201).send('Credential created with success');
}

async function list(_req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);

  const credentials = await credentialService.list(userId);
  res.status(200).json(credentials);
}

async function listById(req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);
  const credentialId = parseInt(req.params.credentialId) || 0;

  const credential = await credentialService.listById(userId, credentialId);
  res.status(200).json(credential);
}

export const credentialController = {
  create,
  list,
  listById,
};
