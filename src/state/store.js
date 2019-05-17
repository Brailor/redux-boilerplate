import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import apiMiddleWare from 'redux-thunk';
import { booksReducer } from './reducers';

function placeHolder(state = {}, action) {
  return state;
}
const rootReducer = combineReducers({
  books: booksReducer, //booksReducer,
  notifications: placeHolder //notificationsReducer
});

const loggerMiddleWare = store => next => action => {
  //log every action at this point, later change this to log only specific
  // action types
  debugger;
  console.log(`Dispatching action: ${JSON.stringify(action)}`);
  next(action);
  console.log(`State after action: ${JSON.stringify(store.getState())}`);
};

const coreMiddleWares = [
  //notificationsMiddleWare
  apiMiddleWare,
  loggerMiddleWare
];

const featureMiddleWares = [
  // booksMiddleWare
];

const enhancer = compose(
  applyMiddleware(...featureMiddleWares, ...coreMiddleWares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, {}, enhancer);
window.store = store;

export default store;
