import { Wifi as WifiModel } from '@prisma/client';

import { IWifiRequestDTO } from '../dtos/WifiRequestDTO';
import { Wifi } from '../entities/Wifi';
import { wifiRepository } from '../repositories/wifiRepository';
import { AppError } from '../utils/AppError';
import { cryptUtils } from '../utils/cryptUtils';
import { businessRulesService } from './businessRulesService';

async function createWifi(data: IWifiRequestDTO): Promise<void> {
  await businessRulesService.checkIfUserIdExists(data.userId);

  const wifi = await wifiRepository.findByUserIdAndTitle(
    data.userId,
    data.title
  );
  if (wifi) {
    throw new AppError('Wifi already exists', 400);
  }

  const newWifi = new Wifi(data);
  await wifiRepository.create(newWifi);
}

async function listWifis(userId: number): Promise<WifiModel[]> {
  await businessRulesService.checkIfUserIdExists(userId);

  const wifis = await wifiRepository.list(userId);
  const decryptedWifis = wifis.map((wifi) => ({
    ...wifi,
    password: cryptUtils.decryptData(wifi.password),
  }));

  return decryptedWifis;

  return wifis;
}

export const wifiService = {
  createWifi,
  listWifis,
};
