import bcrypt from 'bcrypt';

import { IUserRequestDTO } from '../dtos/UserRequestDTO';

export class User {
  public email: string;
  public password: string;

  constructor(props: IUserRequestDTO) {
    this.email = props.email;
    this.password = this.hashPassword(props.password);
  }

  private hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    return hashedPassword;
  }
}
