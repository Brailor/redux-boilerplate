import { apiRequest } from '../state/actions/api';
const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q=redux';

const services = [
  {
    name: 'getBooks',
    url: BOOKS_URL,
    method: 'GET'
  }
];

const result = services.reduce((res, service) => {
  return {
    ...res,
    [service.name]: curry(apiRequest)({ ...service })
  };
}, {});

export default result;

function curry(fn) {
  return function curried(...args) {
    if (fn.length === args.length) return fn(...args);

    return curried.bind(null, ...args);
  };
}
