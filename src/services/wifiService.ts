import { IWifiRequestDTO } from '../dtos/WifiRequestDTO';
import { wifiRepository } from '../repositories/wifiRepository';
import { AppError } from '../utils/AppError';
import { businessRulesService } from './businessRulesService';
import { Wifi } from '../entities/Wifi';

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

export const wifiService = {
  createWifi,
};
