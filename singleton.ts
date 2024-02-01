export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) {}
  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }

    return MyService.instance;
  }
}

const myService1: MyService = MyService.create('service1');
console.log(myService1);

const myService2: MyService = MyService.create('service2');
console.log(myService2);

console.log(myService1 === myService2);
