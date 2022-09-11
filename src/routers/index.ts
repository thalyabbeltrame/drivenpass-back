import { Router } from 'express';

import { credentialRouter } from './credentialRouter';
import { noteRouter } from './noteRouter';
import { userRouter } from './userRouter';

export const router = Router();

router.use('/users', userRouter);
router.use('/credentials', credentialRouter);
router.use('/notes', noteRouter);
