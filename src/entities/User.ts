import { IUserRequestDTO } from '../dtos/UserRequestDTO';
import { bcryptUtils } from '../utils/bcryptUtils';

export class User {
  public email: string;
  public password: string;

  constructor(props: IUserRequestDTO) {
    this.email = props.email;
    this.password = bcryptUtils.encryptData(props.password);
  }
}
