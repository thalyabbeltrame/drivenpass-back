import { Wifi } from '@prisma/client';

import { IWifiRequestDTO } from '../dtos/WifiRequestDTO';
import { prisma } from '../prisma';

async function create(data: IWifiRequestDTO) {
  return prisma.wifi.create({
    data,
  });
}

async function findByUserIdAndTitle(
  userId: number,
  title: string
): Promise<Wifi | null> {
  return await prisma.wifi.findFirst({
    where: {
      userId,
      title,
    },
  });
}

export const wifiRepository = {
  create,
  findByUserIdAndTitle,
};
