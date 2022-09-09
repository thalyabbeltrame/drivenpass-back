import { Router } from 'express';

import { UserController } from '../controllers/UserController';
import { validateBody } from '../middlewares/bodyMiddleware';
import { loginSchema, signupSchema } from '../schemas/userSchemas';

export const userRouter = Router();

userRouter.post('/signup', validateBody(signupSchema), UserController.signup);
userRouter.post('/login', validateBody(loginSchema), UserController.login);
