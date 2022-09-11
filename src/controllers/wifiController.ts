import { Request, Response } from 'express';

import { wifiService } from '../services/wifiService';

async function createWifi(req: Request, res: Response) {
  const { wifiNetworkName, password, title } = req.body;
  const userId = parseInt(res.locals.userId);

  await wifiService.createWifi({
    userId,
    wifiNetworkName,
    password,
    title,
  });
  res.status(201).send('Wifi created with success');
}

export const wifiController = {
  createWifi,
};
