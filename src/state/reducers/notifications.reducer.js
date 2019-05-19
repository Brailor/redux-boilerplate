import { SET_NOTIFICATION } from '../actions/notifications';

const initState = [];

export function notificationReducer(state = initState, action) {
  switch (true) {
    case action.type.includes(SET_NOTIFICATION): {
      return [...state, action.payload];
    }

    default:
      return state;
  }
}
