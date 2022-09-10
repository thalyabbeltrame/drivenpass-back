import { ICredentialRequestDTO } from '../dtos/CredentialRequestDTO';
import { cryptUtils } from '../utils/cryptUtils';

export class Credential {
  readonly userId: number;
  readonly url: string;
  readonly username: string;
  public password: string;
  readonly title: string;

  constructor(props: ICredentialRequestDTO) {
    this.userId = props.userId;
    this.url = props.url;
    this.username = props.username;
    this.password = cryptUtils.encryptData(props.password);
    this.title = props.title;
  }
}
