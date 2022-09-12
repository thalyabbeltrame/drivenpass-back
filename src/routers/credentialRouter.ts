import { Router } from 'express';

import { credentialController } from '../controllers/credentialController';
import { validateBody } from '../middlewares/bodyMiddleware';
import { validateToken } from '../middlewares/tokenMiddleware';
import { credentialSchema } from '../schemas/credentialSchema';

export const credentialRouter = Router();

credentialRouter.use(validateToken);

credentialRouter.post(
  '/',
  validateBody(credentialSchema),
  credentialController.createCredential
);
credentialRouter.get('/', credentialController.listCredentials);
credentialRouter.get('/:credentialId', credentialController.listCredentialById);
credentialRouter.delete(
  '/:credentialId',
  credentialController.deleteCredentialById
);
