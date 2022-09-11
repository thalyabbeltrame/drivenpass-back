import { CardType } from '@prisma/client';

import { ICardRequestDTO } from '../dtos/CardRequestDTO';
import { cryptUtils } from '../utils/cryptUtils';

export class Card {
  readonly userId: number;
  readonly number: string;
  readonly cardholderName: string;
  readonly expirationDate: string;
  readonly securityCode: string;
  readonly isVirtual: boolean;
  readonly password: string;
  readonly type: CardType;
  readonly title: string;

  constructor(props: ICardRequestDTO) {
    this.userId = props.userId;
    this.number = props.number;
    this.cardholderName = props.cardholderName.toLocaleUpperCase();
    this.expirationDate = props.expirationDate;
    this.securityCode = cryptUtils.encryptData(props.securityCode);
    this.isVirtual = props.isVirtual;
    this.password = cryptUtils.encryptData(props.password);
    this.type = props.type;
    this.title = props.title;
  }
}
