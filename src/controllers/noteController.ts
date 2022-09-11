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

async function listNoteById(req: Request, res: Response) {
  const userId = parseInt(res.locals.userId);
  const noteId = parseInt(req.params.noteId) || 0;

  const note = await noteService.listNoteById(userId, noteId);
  res.status(200).json(note);
}

export const noteController = {
  createNote,
  listNotes,
  listNoteById,
};
