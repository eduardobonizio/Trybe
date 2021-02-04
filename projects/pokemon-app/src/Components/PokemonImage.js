import React from "react";
import PokeSprites from "../Cache/sprites.json";

function PokemonImage({ id, name, resetFilters }) {
  const link = findSprite(id);
  function findSprite(id) {
    const {
      sprites: {
        other: {
          "official-artwork": { front_default },
        },
      },
    } = PokeSprites.find((e) => e.id === id);
    return front_default;
  }
  return <img src={link} alt={`Pokemon ${name}`} onClick={resetFilters} />;
}

export default PokemonImage;
