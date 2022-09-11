import { Router } from 'express';

import { cardRouter } from './cardRouter';
import { credentialRouter } from './credentialRouter';
import { noteRouter } from './noteRouter';
import { userRouter } from './userRouter';
import { wifiRouter } from './wifiRouter';

export const router = Router();

router.use('/users', userRouter);
router.use('/credentials', credentialRouter);
router.use('/notes', noteRouter);
router.use('/wifis', wifiRouter);
router.use('/cards', cardRouter);
