import React from "react";

function Pokemon({ name, type, id, changeType }) {
  function pokeType(type) {
    const types = type.map((e) => (
      <div
        key={e}
        className={`${e.toLowerCase()} poke-type-box`}
        onClick={changeType}
      >
        {e}
      </div>
    ));
    return <div className="poke-type">{types}</div>;
  }

  return (
    <div className="pokeInfo">
      <div>
        ID: {id}
        <br />
        Name: {name}
        <br />
        {pokeType(type)}
      </div>
    </div>
  );
}

export default Pokemon;
