import * as ActionTypes from "../../constants/ActionTypes.js";

const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SETTINGS_RESET:
      return INITIAL_STATE;
    case ActionTypes.SETTINGS_SET:
      const { key, value } = payload;
      state.filter((i) => i.key !== key);
      return [...state.filter((i) => i.key !== key), { key, value }];
    case ActionTypes.SETTINGS_UNSET:
      return [...state.filter((i) => i.key !== payload)];
    default:
      return state;
  }
}
