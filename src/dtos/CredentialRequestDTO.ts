import { Credential } from '@prisma/client';

export type ICredentialRequestDTO = Omit<Credential, 'id' | 'createdAt'>;
