import { prisma } from '../prisma';
import { UserRepository } from '../repositories/UserRepository';
import { CreateUserService } from './CreateUserService';

export const userRepository = new UserRepository(prisma);
export const createUserService = new CreateUserService(userRepository);
