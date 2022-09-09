import { User } from '@prisma/client';

export type ICreateUserRequestDTO = Omit<User, 'id' | 'createdAt'>;
