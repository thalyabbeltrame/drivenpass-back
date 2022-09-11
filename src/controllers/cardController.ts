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

export const cardController = {
  createCard,
};
