import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { booksReducer } from './reducers/books.reducer';
import { notificationReducer } from './reducers/notifications.reducer';
import { uiReducer } from './reducers/ui.reducer';

import loggerMiddleWare from './middlewares/core/loggerMiddleWare';
import apiMiddleWare from './middlewares/core/apiMiddleWare';
import booksMiddleWare from './middlewares/feature/booksMiddleWare';

const rootReducer = combineReducers({
  books: booksReducer,
  notifications: notificationReducer,
  ui: uiReducer
});

const coreMiddleWares = [
  //notificationsMiddleWare
  //   apiMiddleWare,
  loggerMiddleWare
];

const featureMiddleWares = [booksMiddleWare];

const enhancer = compose(
  applyMiddleware(...featureMiddleWares, ...coreMiddleWares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, {}, enhancer);
window.store = store;

export default store;
