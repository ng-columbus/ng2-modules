export * from './named-export';
export * from './default-export';

// observe the values of global and this in the browser console
console.log('global variable should be window object', global);
console.log('this variable supposed to be undefined, but its not', this);
