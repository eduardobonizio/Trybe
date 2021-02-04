import { SETTINGS_SET, SETTINGS_UNSET, SETTINGS_RESET } from '../../constants/ActionTypes';

export function set(payload) {
  const { key, value } = payload;
  return {
    type: SETTINGS_SET,
    payload: {
      key,
      value,
    },
  };
}

export function unset(key) {
  return {
    type: SETTINGS_UNSET,
    payload: key,
  };
}

export function reset() {
  return {
    type: SETTINGS_RESET,
  };
}
