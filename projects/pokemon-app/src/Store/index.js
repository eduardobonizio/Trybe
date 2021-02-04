import { createStore, combineReducers } from "redux";

import counter from "./counter/counter.reducer";
import pokeList from "./pokeList/pokelist.reducer";

const rootReducer = combineReducers({
  counter,
  pokeList,
});

const store = createStore(rootReducer);

export default store;
