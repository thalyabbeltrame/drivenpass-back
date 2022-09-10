import Cryptr from 'cryptr';

const CRYPT_KEY = process.env.CRYPT_KEY || 'secret';

function encryptData(text: string): string {
  const cryptr = new Cryptr(CRYPT_KEY);
  return cryptr.encrypt(text);
}

function decryptData(text: string): string {
  const cryptr = new Cryptr(CRYPT_KEY);
  return cryptr.decrypt(text);
}

export const cryptUtils = {
  encryptData,
  decryptData,
};
