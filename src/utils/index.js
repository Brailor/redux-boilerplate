export function curry(fn) {
  return function curried(...args) {
    if (fn.length === args.length) return fn(...args);

    return curried.bind(null, ...args);
  };
}
