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

  add(amount: number, type: DateType): void {
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

  set day(day: number) {
    this._day = day;
  }

  set month(month: number) {
    this._month = month;
  }

  set year(year: number) {
    this._year = year;
  }
}

const myDate: MyDate = new MyDate(2024, 1, 20);
console.log(myDate.printFormat());
myDate.day = 15;
myDate.month = 12;
myDate.year = 2025;
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
