import { Router } from 'express';

import { userController } from '../controllers/userController';
import { validateBody } from '../middlewares/bodyMiddleware';
import { loginSchema, signupSchema } from '../schemas/userSchemas';

export const userRouter = Router();

userRouter.post('/signup', validateBody(signupSchema), userController.signup);
userRouter.post('/login', validateBody(loginSchema), userController.login);
