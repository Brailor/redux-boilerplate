import { ADD_BOOKS, REMOVE_BOOK } from '../actions/books';

let initState = [];

export function booksReducer(state = initState, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case ADD_BOOKS: {
      return [...state, payload];
    }

    case REMOVE_BOOK: {
      return state.filter(book => {
        return book.id !== payload.id;
      });
    }

    default:
      return state;
  }
}
