import { Router } from 'express';
import { credentialController } from '../controllers/credentialController';
import { validateBody } from '../middlewares/bodyMiddleware';
import { validateToken } from '../middlewares/tokenMiddleware';
import { credentialSchema } from '../schemas/credentialSchema';

export const credentialRouter = Router();

credentialRouter.post(
  '/',
  validateToken,
  validateBody(credentialSchema),
  credentialController.createCredential
);
credentialRouter.get('/', validateToken, credentialController.listCredentials);
credentialRouter.get(
  '/:credentialId',
  validateToken,
  credentialController.listCredentialById
);
credentialRouter.delete(
  '/:credentialId',
  validateToken,
  credentialController.deleteCredentialById
);
