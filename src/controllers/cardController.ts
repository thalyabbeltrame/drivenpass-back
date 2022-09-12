import { Request, Response } from 'express';

import { cardService } from '../services/cardService';

async function createCard(req: Request, res: Response) {
  const {
    number,
    cardholderName,
    expirationDate,
    securityCode,
    isVirtual,
    type,
    password,
    title,
  } = req.body;
  const userId = parseInt(res.locals.userId);

  await cardService.createCard({
    userId,
    number,
    cardholderName,
    expirationDate,
    securityCode,
    isVirtual,
    type,
    password,
    title,
  });
  return res.status(201).send('Card created with success');
}

async function listCards(_req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);

  const cards = await cardService.listCards(userId);
  return res.status(200).json(cards);
}

async function listCardById(req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);
  const cardId = parseInt(req.params.cardId) || 0;

  const card = await cardService.listCardById(userId, cardId);
  return res.status(200).json(card);
}

async function deleteCardById(req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);
  const cardId = parseInt(req.params.cardId) || 0;

  await cardService.deleteCardById(userId, cardId);
  return res.status(200).send('Card deleted with success');
}

export const cardController = {
  createCard,
  listCards,
  listCardById,
  deleteCardById,
};
