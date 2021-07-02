import {CurrencyValue} from './CurrencyValue';

export class CurrencyType {
  constructor(public rates: CurrencyValue,
              public base: string,
              public date: Date) {

  }

}
