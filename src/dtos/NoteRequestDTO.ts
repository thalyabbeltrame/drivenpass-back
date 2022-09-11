import { Note } from '@prisma/client';

export type INoteRequestDTO = Omit<Note, 'id' | 'createdAt'>;
