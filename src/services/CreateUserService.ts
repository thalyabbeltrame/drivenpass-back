import { ICreateUserRequestDTO } from '../dtos/CreateUserDTO';
import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';
import { AppError } from '../utils/AppError';

export class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO): Promise<void> {
    await this.checkIfUserAlreadyExists(data.email);

    const user = new User(data);

    await this.userRepository.create(user);
  }

  private async checkIfUserAlreadyExists(email: string): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists', 409);
    }
  }
}
