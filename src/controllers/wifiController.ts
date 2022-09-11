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

async function listWifis(_req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);

  const wifis = await wifiService.listWifis(userId);
  res.status(200).json(wifis);
}

export const wifiController = {
  createWifi,
  listWifis,
};
