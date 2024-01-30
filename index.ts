// export type DateType = 'days' | 'months' | 'years';
export enum DateType {
  DAYS = 'days',
  MONTHS = 'months',
  YEARS = 'years',
}

export class MyDate {
  constructor(
    private _year: number,
    private _month: number,
    private _day: number
  ) {}

  printFormat(): string {
    return `${this._day}/${this._month}/${this._year}`;
  }

  add(amount: number, type: DateType) {
    if (type === DateType.DAYS) {
      this._day += amount;
    }

    if (type === DateType.MONTHS) {
      this._month += amount;
    }

    if (type === DateType.YEARS) {
      this._year += amount;
    }
  }

  get day(): number {
    return this._day;
  }

  get month(): number {
    return this._month;
  }

  get year(): number {
    return this._year;
  }
}

const myDate: MyDate = new MyDate(2024, 1, 20);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
