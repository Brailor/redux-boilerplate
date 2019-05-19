import { API_REQUEST, apiFailure, apiSucces } from '../../actions/api';
import { setLoader } from '../../actions/ui';
import { setNotification } from '../../actions/notifications';

const apiMiddleWare = ({ dispatch }) => next => action => {
  next(action);
  const { type, meta } = action;
  if (type.includes(API_REQUEST)) {
    const { url, method, timeout, feature } = meta;

    dispatch(setLoader({ state: true, feature }));
    fetch(url, {
      method,
      timeout
    })
      .then(response => {
        dispatch(apiSucces({ response, feature }));
      })
      .catch(error => {
        dispatch(apiFailure({ error, feature }));
      })
      .finally(() => dispatch(setLoader({ state: false, feature })));
  }
};

export default apiMiddleWare;
