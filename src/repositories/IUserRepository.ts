import { User } from '@prisma/client';

import { IUserRequestDTO } from '../dtos/UserRequestDTO';

export interface IUserRepository {
  create(data: IUserRequestDTO): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
