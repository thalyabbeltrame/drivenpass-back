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

export const noteRepository = {
  create,
  findByUserIdAndTitle,
};
