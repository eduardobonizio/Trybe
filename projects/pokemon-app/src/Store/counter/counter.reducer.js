const INITIAL_STATE = {
  value: 0,
};

export default function counter(state = INITIAL_STATE, action) {
  console.log(state, action);
  switch (action.type) {
    case "COUNTER_CHANGE": {
      return {
        ...state,
        value: action.payload,
      };
    }

    default:
      return state;
  }
}
