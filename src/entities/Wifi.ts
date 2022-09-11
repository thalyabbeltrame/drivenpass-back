import { IWifiRequestDTO } from '../dtos/WifiRequestDTO';
import { cryptUtils } from '../utils/cryptUtils';

export class Wifi {
  readonly userId: number;
  readonly wifiNetworkName: string;
  public password: string;
  readonly title: string;

  constructor(props: IWifiRequestDTO) {
    this.userId = props.userId;
    this.wifiNetworkName = props.wifiNetworkName;
    this.password = cryptUtils.encryptData(props.password);
    this.title = props.title;
  }
}
