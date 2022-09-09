import bcrypt from 'bcrypt';

import { ICreateUserRequestDTO } from '../dtos/CreateUserDTO';

export class User {
  public email: string;
  public password: string;

  constructor(props: ICreateUserRequestDTO) {
    this.email = props.email;
    this.password = this.hashPassword(props.password);
  }

  private hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    return hashedPassword;
  }
}
