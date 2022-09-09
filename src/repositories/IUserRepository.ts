import { User } from '@prisma/client';

import { ICreateUserRequestDTO } from '../dtos/CreateUserDTO';

export interface IUserRepository {
  create(data: ICreateUserRequestDTO): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
