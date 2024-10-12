function merge<T extends {}>(objA: T, objB: T): T {
  return Object.assign(objA, objB);
}
console.log(merge({ first: 2 }, { second: 2 }));