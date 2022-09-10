import { Router } from 'express';

import { credentialRouter } from './credentialRouter';
import { userRouter } from './userRouter';

export const router = Router();

router.use('/users', userRouter);
router.use('/credentials', credentialRouter);
