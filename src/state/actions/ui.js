export const SET_LOADER = 'SET_LOADER';

export function setLoader({ state, feature }) {
  return {
    type: `${feature} ${SET_LOADER}`,
    payload: state,
    meta: {
      feature
    }
  };
}
