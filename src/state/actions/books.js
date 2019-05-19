/* Feature */
export const BOOKS = '[BOOKS]';

/* Document actions */
export const ADD_BOOKS = `${BOOKS} ADD_BOOKS`;
export const REMOVE_BOOK = `${BOOKS} REMOVE_BOOK`;
export const UPDATE_BOOK = `${BOOKS} UPDATE_BOOK`;

/* Command actions */
export const FETCH_BOOKS = `${BOOKS} FETCH_BOOKS`;

export function addBooks({ payload }) {
  return {
    payload,
    type: ADD_BOOKS
  };
}

export function removeBook({ payload }) {
  return {
    payload,
    type: REMOVE_BOOK
  };
}

export function updateBook({ payload }) {
  return {
    payload,
    type: UPDATE_BOOK
  };
}

export function fetchBooks({ params }) {
  return {
    payload: params,
    type: FETCH_BOOKS
  };
}
