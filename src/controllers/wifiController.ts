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

async function listWifiById(req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);
  const wifiId = parseInt(req.params.wifiId) || 0;

  const wifi = await wifiService.listWifiById(userId, wifiId);
  res.status(200).json(wifi);
}

async function deleteWifiById(req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);
  const wifiId = parseInt(req.params.wifiId) || 0;

  await wifiService.deleteWifiById(userId, wifiId);
  res.status(200).send('Wifi deleted with success');
}

export const wifiController = {
  createWifi,
  listWifis,
  listWifiById,
  deleteWifiById,
};
