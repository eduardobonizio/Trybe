const fs = require("fs");
const path = require("path");
const axios = require("axios").default;

function delay(ms) {
  var init = new Date().getTime();
  var end = init;
  while (end < init + ms) {
    end = new Date().getTime();
  }
}

// fs.writeFile(
//   path.join(DEF_CACHE_PATH, "pokemons.json"),
//   JSON.stringify(list),
//   function (err) {
//     if (err) throw err;
//     console.log("Done!");
//   }
// );
