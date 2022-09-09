import { User } from '@prisma/client';

export type IUserRequestDTO = Omit<User, 'id' | 'createdAt'>;
