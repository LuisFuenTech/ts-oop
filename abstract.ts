import { Dog } from './animal.class';

const dog: Dog = new Dog({ name: 'Rocket', owner: 'Luis' });
dog.greet();
dog.bark(2);
