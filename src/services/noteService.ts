import { Note as NoteModel } from '@prisma/client';

import { INoteRequestDTO } from '../dtos/NoteRequestDTO';
import { Note } from '../entities/Note';
import { noteRepository } from '../repositories/noteRepository';
import { AppError } from '../utils/AppError';
import { businessRulesService } from './businessRulesService';

async function createNote(data: INoteRequestDTO): Promise<void> {
  await businessRulesService.checkIfUserIdExists(data.userId);

  const note = await noteRepository.findByUserIdAndTitle(
    data.userId,
    data.title
  );
  if (note) {
    throw new AppError('Note already exists', 400);
  }

  const newNote = new Note(data);
  await noteRepository.create(newNote);
}

async function listNotes(userId: number): Promise<NoteModel[]> {
  await businessRulesService.checkIfUserIdExists(userId);

  const notes = await noteRepository.list(userId);

  return notes;
}

async function listNoteById(
  userId: number,
  noteId: number
): Promise<NoteModel> {
  await businessRulesService.checkIfUserIdExists(userId);

  const note = await noteRepository.listById(noteId);
  if (!note) {
    throw new AppError('Note not found', 404);
  }

  if (note.userId !== userId) {
    throw new AppError('Note does not belong to the user', 403);
  }

  return note;
}

async function deleteNoteById(userId: number, noteId: number): Promise<void> {
  await businessRulesService.checkIfUserIdExists(userId);

  const note = await noteRepository.listById(noteId);
  if (!note) {
    throw new AppError('Note not found', 404);
  }

  if (note.userId !== userId) {
    throw new AppError('Note does not belong to the user', 403);
  }

  await noteRepository.deleteById(noteId);
}

export const noteService = {
  createNote,
  listNotes,
  listNoteById,
  deleteNoteById,
};
