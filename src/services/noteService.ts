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

export const noteService = {
  createNote,
};
