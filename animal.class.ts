export class Animal {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} is moving`);
  }

  greet(): void {
    console.log(`${this.name} is greeting`);
  }
}

export class Dog extends Animal {
  private _owner: string;

  constructor(data: { name: string; owner: string }) {
    super(data.name);
    this._owner = data.owner;
  }

  bark(times: number = 1): void {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }

  get owner(): string {
    return this._owner;
  }
}

const rocket: Dog = new Dog({ name: 'Rocket', owner: 'Luis' });
rocket.greet();
rocket.bark(3);
console.log(rocket.owner);
