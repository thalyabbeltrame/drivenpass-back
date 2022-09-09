import { IUserRequestDTO } from '../dtos/UserRequestDTO';
import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';
import { AppError } from '../utils/AppError';

export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: IUserRequestDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);
    if (userAlreadyExists) {
      throw new AppError('User already exists', 409);
    }

    const user = new User(data);
    await this.userRepository.create(user);
  }
}
