const axios = require("axios").default;

const endPoints = {
  Pokemon: "https://pokeapi.co/api/v2/pokemon/",
  Gender: "https://pokeapi.co/api/v2/gender/",
  Color: "https://pokeapi.co/api/v2/pokemon-color/",
  Type: "https://pokeapi.co/api/v2/type/",
  EvolutionChains: "https://pokeapi.co/api/v2/evolution-chain/",
  EvolutionTriggers: "https://pokeapi.co/api/v2/evolution-trigger/",
  Ability: "https://pokeapi.co/api/v2/ability/",
  Location: "https://pokeapi.co/api/v2/location/",
  Move: "https://pokeapi.co/api/v2/move/",
};

// const parseValue = (value) => {
//   //
// };

// const parseOptions = (value) => {
//   //
// };

const Pokemon = async (value, options = {}) => {
  //const data = await fetch(endPoints.Pokemon + value).then((res) => res.json());
  const data = await axios
    .get(endPoints.Pokemon + value)
    .then((res) => res.data);
  const result = {
    id: data.id,
    name: data.name,
  };

  return result;
};

module.exports = {
  Pokemon,
  endPoints,
};
