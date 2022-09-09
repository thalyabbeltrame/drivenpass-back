import { Router } from 'express';

import { validateBody } from '../middlewares/bodyMiddleware';
import { signupSchema } from '../schemas/userSchemas';
import { UserController } from '../controllers/UserController';

export const userRouter = Router();

userRouter.post('/signup', validateBody(signupSchema), UserController.signup);
