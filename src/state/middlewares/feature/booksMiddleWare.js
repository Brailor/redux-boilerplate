import { BOOKS, FETCH_BOOKS, addBook } from '../../actions/books';
import { API_FAILURE, API_SUCCESS } from '../../actions/api';

import services from '../../../api/services';

const booksMiddleWare = () => next => action => {
  // call next middleware for loggin purposes
  next(action);

  const { type, payload } = action;
  switch (type) {
    case FETCH_BOOKS:
      next(services.getBooks({ body: null, feature: BOOKS }));
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next(addBook({ payload }));
      break;

    case `${BOOKS} ${API_FAILURE}`:
      break;

    default:
      break;
  }
};

export default booksMiddleWare;
