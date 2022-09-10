import bcript from 'bcrypt';

import { IUserRequestDTO } from '../dtos/UserRequestDTO';
import { User } from '../entities/User';
import { userRepository } from '../repositories/userRepository';
import { AppError } from '../utils/AppError';
import { generateToken } from '../utils/jwtUtils';

async function signup(data: IUserRequestDTO): Promise<void> {
  const userAlreadyExists = await userRepository.findByEmail(data.email);
  if (userAlreadyExists) {
    throw new AppError('User already exists', 409);
  }

  const user = new User(data);
  await userRepository.create(user);
}

async function login(data: IUserRequestDTO): Promise<string> {
  const user = await userRepository.findByEmail(data.email);
  if (!user) {
    throw new AppError('Incorrect email/password', 401);
  }

  const passwordMatch = bcript.compareSync(data.password, user.password);
  if (!passwordMatch) {
    throw new AppError('Incorrect email/password', 401);
  }

  const token = generateToken(user);
  return token;
}

export const userService = {
  signup,
  login,
};
