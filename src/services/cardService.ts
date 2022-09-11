import { ICardRequestDTO } from '../dtos/CardRequestDTO';
import { Card } from '../entities/Card';
import { cardRepository } from '../repositories/cardRepository';
import { AppError } from '../utils/AppError';
import { businessRulesService } from './businessRulesService';

async function createCard(data: ICardRequestDTO): Promise<void> {
  await businessRulesService.checkIfUserIdExists(data.userId);

  const card = await cardRepository.findByUserIdAndTitle(
    data.userId,
    data.title
  );
  if (card) {
    throw new AppError('Card already exists', 400);
  }

  const newCard = new Card(data);
  await cardRepository.create(newCard);
}

export const cardService = {
  createCard,
};
