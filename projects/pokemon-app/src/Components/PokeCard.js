import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon";
import PokemonImage from "./PokemonImage";

function PokeCard({ filterByText, filterByType, changeType, resetFilters }) {
  const pokeList = useSelector((state) => state.pokeList);

  const filterPokes = () => {
    if (filterByText !== "" && filterByText.length >= 3) {
      let pokes = pokeList.filter((poke) =>
        poke.name.toLowerCase().includes(filterByText.toLowerCase())
      );

      if (filterByType !== "none") {
        pokes = pokes.filter((poke) => poke.types.includes(filterByType));
      }
      return pokes.map((poke) => (
        <div className="card" key={poke.id}>
          <Pokemon
            name={poke.name}
            type={poke.types}
            id={poke.id}
            changeType={changeType}
          />
          <Link to={`/view/${poke.id}`}>
            <PokemonImage
              id={poke.id}
              name={poke.name}
              resetFilters={resetFilters}
            />
          </Link>
        </div>
      ));
    }
  };

  return <div className="poke-list">{filterPokes()}</div>;
}

export default PokeCard;
