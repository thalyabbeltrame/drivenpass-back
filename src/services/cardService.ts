import { Card as CardModel } from '@prisma/client';

import { ICardRequestDTO } from '../dtos/CardRequestDTO';
import { Card } from '../entities/Card';
import { cardRepository } from '../repositories/cardRepository';
import { AppError } from '../utils/AppError';
import { cryptUtils } from '../utils/cryptUtils';
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

async function listCards(userId: number): Promise<CardModel[]> {
  await businessRulesService.checkIfUserIdExists(userId);

  const cards = await cardRepository.list(userId);
  const decryptedCards = cards.map((card) => ({
    ...card,
    securityCode: cryptUtils.decryptData(card.securityCode),
    password: cryptUtils.decryptData(card.password),
  }));

  return decryptedCards;
}

export const cardService = {
  createCard,
  listCards,
};
