import { Router } from 'express';

import { noteController } from '../controllers/noteController';
import { validateBody } from '../middlewares/bodyMiddleware';
import { validateToken } from '../middlewares/tokenMiddleware';
import { noteSchema } from '../schemas/noteSchema';

export const noteRouter = Router();

noteRouter.use(validateToken);

noteRouter.post(
  '/',
  validateToken,
  validateBody(noteSchema),
  noteController.createNote
);
noteRouter.get('/', noteController.listNotes);
