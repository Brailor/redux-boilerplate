const loggerMiddleWare = store => next => action => {
  //log every action at this point, later change this to log only specific
  // action types

  if (action.meta && action.meta.feautre) {
    console.group(action.meta.feautre);

    console.log();
  }
  next(action);
};

export default loggerMiddleWare;
