import { Router } from 'express';

import { cardController } from '../controllers/cardController';
import { validateBody } from '../middlewares/bodyMiddleware';
import { validateToken } from '../middlewares/tokenMiddleware';
import { cardSchema } from '../schemas/cardSchema';

export const cardRouter = Router();

cardRouter.use(validateToken);

cardRouter.post('/', validateBody(cardSchema), cardController.createCard);
cardRouter.get('/', cardController.listCards);
