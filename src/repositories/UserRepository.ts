import { PrismaClient, User } from '@prisma/client';
import { IUserRequestDTO } from '../dtos/UserRequestDTO';
import { IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: IUserRequestDTO): Promise<void> {
    await this.prisma.user.create({
      data,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }
}
