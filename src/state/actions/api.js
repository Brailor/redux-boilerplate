export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

export function apiRequest({ url, method, name } = {}, { params, feature, timeout } = {}) {
  return {
    type: `${feature} ${API_REQUEST}`,
    payload: params,
    meta: {
      url,
      method,
      feature,
      timeout,
      serviceName: name
    }
  };
}

export function apiFailure() {}
export function apiSucces() {}
