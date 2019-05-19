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
        return response.json();
      })
      .then(response => {
        // // at this point the request was sucessful from the network point of view
        // // but the request could be valid/invalid depending on the backend side
        // // eg: the requset was correct but the backend could send success: true/false in the response
        // // so we have to handle it somehow
        // if (response.success) {
        //   dispatch(apiSucces({ response, feature }));
        // } else {
        //   //handle this somehow
        // }

        dispatch(apiSucces({ response, feature }));

        if (response.messages && response.messages.length) {
          dispatch(
            setNotification({
              message: response.message,
              feature
            })
          );
        }

        return response;
      })
      .catch(error => {
        dispatch(apiFailure({ error, feature }));

        return error;
      })
      .finally(() => {
        dispatch(setLoader({ state: false, feature }));
      });
  }
};

export default apiMiddleWare;
