export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

export function apiRequest(fetchOpts, actionOpts) {
  const { url, method, name } = fetchOpts;
  const { params, feature, timeout, meta = {} } = actionOpts;

  return {
    type: `${feature} ${API_REQUEST}`,
    payload: params,
    meta: {
      ...meta,
      url,
      method,
      feature,
      timeout,
      serviceName: name
    }
  };
}

export function apiFailure({ error, feature }) {
  return {
    type: `${feature} ${API_FAILURE}`,
    payload: error,
    meta: {
      feature
    }
  };
}
export function apiSucces({ response, feature }) {
  return {
    type: `${feature} ${API_SUCCESS}`,
    payload: response,
    meta: {
      feature
    }
  };
}
