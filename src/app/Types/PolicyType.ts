import {ClientType} from './ClientType';

export class PolicyType {
  id: number;
  types: object;
  subtype: string;
  number: string;
  period: number;
  startDate: Date;
  endDate: Date;
  fee: number;
  euroFee: number;
  client: ClientType;
}
