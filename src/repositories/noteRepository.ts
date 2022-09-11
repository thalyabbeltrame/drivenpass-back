import { Note } from '@prisma/client';

import { INoteRequestDTO } from '../dtos/NoteRequestDTO';
import { prisma } from '../prisma';

async function create(data: INoteRequestDTO) {
  await prisma.note.create({
    data,
  });
}

async function findByUserIdAndTitle(
  userId: number,
  title: string
): Promise<Note | null> {
  const note = await prisma.note.findFirst({
    where: {
      userId,
      title,
    },
  });

  return note;
}

async function list(userId: number): Promise<Note[]> {
  return await prisma.note.findMany({
    where: {
      userId,
    },
  });
}

async function listById(noteId: number): Promise<Note | null> {
  return await prisma.note.findUnique({
    where: {
      id: noteId,
    },
  });
}

// async function deleteById(noteId: number): Promise<void> {
//   await prisma.note.delete({
//     where: {
//       id: noteId,
//     },
//   });
// }

export const noteRepository = {
  create,
  findByUserIdAndTitle,
  list,
  listById,
  // deleteById,
};
