import { User } from '@prisma/client';
import bcript from 'bcrypt';
import jwt from 'jsonwebtoken';

import { IUserRequestDTO } from '../dtos/UserRequestDTO';
import { IUserRepository } from '../repositories/IUserRepository';
import { AppError } from '../utils/AppError';

export class LoginUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IUserRequestDTO): Promise<string> {
    const user = await this.userRepository.findByEmail(data.email);
    if (!user) {
      throw new AppError('Incorrect email/password', 401);
    }

    const passwordMatch = bcript.compareSync(data.password, user.password);
    if (!passwordMatch) {
      throw new AppError('Incorrect email/password', 401);
    }

    const token = this.generateToken(user);
    return token;
  }

  private generateToken(user: User): string {
    const token = jwt.sign({ userId: user.id }, 'secret', {
      expiresIn: '1d',
    });

    return token;
  }
}
