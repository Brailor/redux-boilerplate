export const SET_NOTIFICATION = 'SET_NOTIFICATION';

export function setNotification({ message, feature }) {
  return {
    type: `${feature} ${SET_NOTIFICATION}`,
    payload: message,
    meta: {
      feature
    }
  };
}
