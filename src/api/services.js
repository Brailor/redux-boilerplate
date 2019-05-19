import { apiRequest } from '../state/actions/api';
import { curry } from '../utils/index';
const BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes?q=redux';

const serviceConfigs = [
  {
    name: 'getBooks',
    url: BOOKS_URL,
    method: 'GET'
  }
];

const services = serviceConfigs.reduce((res, service) => {
  return {
    ...res,
    [service.name]: curry(apiRequest)({ ...service })
  };
}, {});

export default services;
