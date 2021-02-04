import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard";

function SearchPoke(props) {
  const [filterByText, setFilterBytext] = useState("");
  const [filterByType, setFilterByType] = useState("none");
  const [increaseWidth, setIncreaseWidth] = useState(false);

  function resetFilters() {
    setFilterBytext("");
    setFilterByType("none");
  }

  function generateTypes() {
    const types = [
      "normal",
      "fighting",
      "flying",
      "poison",
      "ground",
      "rock",
      "bug",
      "ghost",
      "steel",
      "fire",
      "water",
      "grass",
      "electric",
      "psychic",
      "ice",
      "dragon",
      "dark",
      "fairy",
    ];
    return [
      <option value="none" key="none">
        none
      </option>,
      types.sort().map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      )),
    ];
  }

  const changeType = (e) => setFilterByType(e.target.innerText);

  useEffect(() => {
    setIncreaseWidth(true, []);
  });

  return (
    <>
      <div className="search-bar">
        <input type="text" onChange={(e) => setFilterBytext(e.target.value)} />
        <select onChange={(e) => setFilterByType(e.target.value)}>
          <option value={filterByType}>{filterByType}</option>
          {generateTypes()}
        </select>
      </div>
      <div className="pokedex">
        <div
          className={`pokedex-container ${
            increaseWidth && "pokedex-container-increase-width"
          }`}
        >
          <PokeCard
            filterByText={filterByText}
            filterByType={filterByType}
            resetFilters={resetFilters}
            changeType={changeType}
          />
        </div>
      </div>
      {/* <div className="pokedex-container">
      {filterByText === "" ? (
        <img
          src="/pokedex.png"
          alt="teste"
          className={`pokedex-image pokedex-image2 ${
            increaseWidth && "pokedex-image-increase-width"
          }`}
        />
      ) : (
        <PokeCard
          filterByText={filterByText}
          filterByType={filterByType}
          resetFilters={resetFilters}
          changeType={changeType}
        />
      )}
      </div> */}
    </>
  );
}

export default SearchPoke;
