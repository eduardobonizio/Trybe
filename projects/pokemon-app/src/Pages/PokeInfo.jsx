import React from "react";
import SearchPoke from "../Components/SearchPoke";
//import PropTypes from "prop-types";

function PokeInfo(props) {
  const { id } = props.match.params;
  console.log(id);
  return (
    <main className="home">
      <SearchPoke />
    </main>
  );
}

export default PokeInfo;
