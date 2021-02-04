import pokemons from "../../Cache/pokemons.json";
const INITIAL_STATE = pokemons;

export default function pokeList(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
