import { ICredentialRequestDTO } from '../dtos/CredentialRequestDTO';
import { bcryptUtils } from '../utils/bcryptUtils';

export class Credential {
  public userId: number;
  public url: string;
  public username: string;
  public password: string;
  public title: string;

  constructor(props: ICredentialRequestDTO) {
    this.userId = props.userId;
    this.url = props.url;
    this.username = props.username;
    this.password = bcryptUtils.encryptData(props.password);
    this.title = props.title;
  }
}
