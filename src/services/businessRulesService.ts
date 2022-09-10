import { credentialRepository } from '../repositories/credentialRepository';
import { userRepository } from '../repositories/userRepository';
import { AppError } from '../utils/AppError';

async function checkIfUserIdExists(userId: number): Promise<void> {
  const user = await userRepository.findById(userId);
  if (!user) {
    throw new AppError('User not found', 404);
  }
}

export const businessRulesService = {
  checkIfUserIdExists,
};
