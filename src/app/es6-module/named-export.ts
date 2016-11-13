// named export of a primitive bound to the name "counter"
export let counter = 0;

// named export of a function bound to the name "incrementCounter"
export function incrementCounter(x: number) {
  counter += x;
  console.log(`counter incremented to ${counter}`);
}

// named export of a class bound to the name "CounterClass"
export class CounterClass {
  value: number = 0;
  name: string = 'CounterClass';

  incrementValue(): number {
    this.value++;
    return this.value;
  }
}

// named export of an object reference bound to the name "counterObject"
export let counterObject = new CounterClass();

// can add a default export if we'd like, no explicit named binding here
// associated with the module name
export default counterObject;
