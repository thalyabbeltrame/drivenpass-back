import { Request, Response } from 'express';

import { credentialService } from '../services/credentialService';

async function create(req: Request, res: Response) {
  const { url, username, password, title } = req.body;
  const userId = parseInt(res.locals.userId);

  await credentialService.create({ userId, url, username, password, title });
  res.status(201).send('Credential created with success');
}

export const credentialController = {
  create,
};
