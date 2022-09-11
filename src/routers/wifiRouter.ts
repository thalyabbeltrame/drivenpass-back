import { Router } from 'express';

import { wifiController } from '../controllers/wifiController';
import { validateBody } from '../middlewares/bodyMiddleware';
import { validateToken } from '../middlewares/tokenMiddleware';
import { wifiSchema } from '../schemas/wifiSchema';

export const wifiRouter = Router();

wifiRouter.use(validateToken);

wifiRouter.post('/', validateBody(wifiSchema), wifiController.createWifi);
wifiRouter.get('/', wifiController.listWifis);
wifiRouter.get('/:wifiId', wifiController.listWifiById);
wifiRouter.delete('/:wifiId', wifiController.deleteWifiById);
