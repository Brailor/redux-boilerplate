const loggerMiddleWare = store => next => action => {
  //log every action at this point, later change this to log only specific
  // action types

  console.group(action.type);
  console.log(action);
  console.groupEnd();
  next(action);
};
export default loggerMiddleWare;
