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

async function listNotes(_req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);

  const notes = await noteService.listNotes(userId);
  res.status(200).json(notes);
}

export const noteController = {
  createNote,
  listNotes,
};
