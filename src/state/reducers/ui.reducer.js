import { SET_LOADER } from '../actions/ui';

const initState = {
  loading: false
};

export function uiReducer(uiState = initState, action) {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return {
        ...uiState,
        loading: action.payload
      };

    default:
      return uiState;
  }
}
