//@ Debug do Sevice PokeV2

const PokeV2 = require("../src/services/PokeV2");
const fs = require("fs");

const teste = async () => {
  const data = await PokeV2.Pokemon("pikachu");
  fs.writeFile("./debug/data.json", JSON.stringify(data), function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
};

teste();
