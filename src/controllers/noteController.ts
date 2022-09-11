import { Request, Response } from 'express';

import { noteService } from '../services/noteService';

async function createNote(req: Request, res: Response) {
  const { title, text } = req.body;
  const userId = parseInt(res.locals.userId);

  await noteService.createNote({
    userId,
    title,
    text,
  });
  res.status(201).send('Note created with success');
}

export const noteController = {
  createNote,
};
