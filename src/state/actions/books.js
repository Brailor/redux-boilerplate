export const BOOKS = '[BOOKS]';

export const ADD_BOOK = `${BOOKS} ADD_BOOK`;
export const REMOVE_BOOK = `${BOOKS} REMOVE_BOOK`;
export const UPDATE_BOOK = `${BOOKS} UPDATE_BOOK`;
export const FETCH_BOOKS = `${BOOKS} FETCH_BOOKS`;

export function addBook({ payload }) {
  return {
    payload,
    type: ADD_BOOK
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
