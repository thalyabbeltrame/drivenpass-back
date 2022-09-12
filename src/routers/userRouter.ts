import { Router } from 'express';

import { userController } from '../controllers/userController';
import { validateBody } from '../middlewares/bodyMiddleware';
import { userSchema } from '../schemas/userSchemas';

export const userRouter = Router();

userRouter.post('/signup', validateBody(userSchema), userController.createUser);
userRouter.post('/login', validateBody(userSchema), userController.login);
