import { prisma } from '../prisma';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserService } from './CreateUserService';
import { LoginUserService } from './UserLoginService';

export const userRepository = new UserRepository(prisma);
export const createUserService = new CreateUserService(userRepository);
export const loginUserService = new LoginUserService(userRepository);
