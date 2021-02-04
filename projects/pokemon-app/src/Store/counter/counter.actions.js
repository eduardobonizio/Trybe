export function change(payload) {
  return {
    type: "COUNTER_CHANGE",
    payload,
  };
}
