import { Router } from 'express';

import { userController } from '../controllers/userController';
import { validateBody } from '../middlewares/bodyMiddleware';
import { sanitizeData } from '../middlewares/sanitizeMiddleware';
import { userSchema } from '../schemas/userSchemas';

export const userRouter = Router();

userRouter.post('/signup', validateBody(userSchema), userController.create);
userRouter.post('/login', validateBody(userSchema), userController.login);
