import {ClientType} from './ClientType';

export class ReminderType {
  id: number;
  date: Date;
  message: string;
  status: boolean;
  client: ClientType;
}
