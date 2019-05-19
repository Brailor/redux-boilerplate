import { BOOKS, FETCH_BOOKS, addBook } from '../../actions/books';
import { API_FAILURE, API_SUCCESS } from '../../actions/api';
import { setLoader } from '../../actions/ui';
import { setNotification } from '../../actions/notifications';

import services from '../../../api/services';

// window;

const booksMiddleWare = ({ dispatch }) => next => action => {
  next(action);

  const { feature, type, payload } = action;
  switch (type) {
    case FETCH_BOOKS:
      debugger;
      console.log(services.getBooks({ body: null, feature: BOOKS }));
      next(services.getBooks({ body: null, feature: BOOKS }));
      next(setLoader({ state: true, feature: BOOKS }));
      break;

    case `${BOOKS} ${API_SUCCESS}`:
      next(addBook({ payload }));
      next(setLoader({ state: false, feature: BOOKS }));
      break;

    case `${BOOKS} ${API_FAILURE}`:
      next(setLoader({ state: false, feature: BOOKS }));
      next(setNotification({ message: payload.message, feature: BOOKS }));
      break;
  }
};

export default booksMiddleWare;
