import {PolicyType} from './PolicyType';
import {ReminderType} from './ReminderType';

export class ClientType {
  id: number;
  name: string;
  cnp: string;
  phoneNumber: string;
  emailAddress: string;
  gdprStatus: boolean;
  leadStatus: boolean;
}
