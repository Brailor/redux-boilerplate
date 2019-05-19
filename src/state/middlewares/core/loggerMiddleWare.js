const loggerMiddleWare = store => next => action => {
  console.group(action.type);
  console.log(action);
  console.group('State after the action');

  console.log(store.getState());
  console.groupEnd();

  console.groupEnd();
};
export default loggerMiddleWare;
