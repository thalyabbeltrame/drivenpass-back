import { Wifi } from '@prisma/client';

export type IWifiRequestDTO = Omit<Wifi, 'id' | 'createdAt'>;
