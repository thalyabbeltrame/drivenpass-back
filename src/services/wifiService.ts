import { Wifi as WifiModel } from '@prisma/client';

import { IWifiRequestDTO } from '../dtos/WifiRequestDTO';
import { Wifi } from '../entities/Wifi';
import { wifiRepository } from '../repositories/wifiRepository';
import { AppError } from '../utils/AppError';
import { cryptUtils } from '../utils/cryptUtils';
import { authService } from './authService';

async function createWifi(data: IWifiRequestDTO): Promise<void> {
  await authService.checkIfUserIdExists(data.userId);

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
  await authService.checkIfUserIdExists(userId);

  const wifis = await wifiRepository.list(userId);
  const decryptedWifis = wifis.map((wifi) => ({
    ...wifi,
    password: cryptUtils.decryptData(wifi.password),
  }));

  return decryptedWifis;
}

async function listWifiById(
  userId: number,
  wifiId: number
): Promise<WifiModel> {
  await authService.checkIfUserIdExists(userId);

  const wifi = await wifiRepository.listById(wifiId);
  if (!wifi) {
    throw new AppError('Wifi not found', 404);
  }

  if (wifi.userId !== userId) {
    throw new AppError('Wifi does not belong to the user', 403);
  }

  const decryptedWifi = {
    ...wifi,
    password: cryptUtils.decryptData(wifi.password),
  };
  return decryptedWifi;
}

async function deleteWifiById(userId: number, wifiId: number): Promise<void> {
  await authService.checkIfUserIdExists(userId);

  const wifi = await wifiRepository.listById(wifiId);
  if (!wifi) {
    throw new AppError('Wifi not found', 404);
  }

  if (wifi.userId !== userId) {
    throw new AppError('Wifi does not belong to the user', 403);
  }

  await wifiRepository.deleteById(wifiId);
}

export const wifiService = {
  createWifi,
  listWifis,
  listWifiById,
  deleteWifiById,
};
