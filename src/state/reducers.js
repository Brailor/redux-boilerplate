import { ADD_BOOK, REMOVE_BOOK } from './actions';

let initState = [];
export function booksReducer(state = initState, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case ADD_BOOK: {
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
