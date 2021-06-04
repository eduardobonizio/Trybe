const fs = require('fs/promises');

const readContent = async (filePath) => {
  const content = await fs.readFile(filePath)
  .then(result => JSON.parse(result))
  return content;
}

const writeFile = (filePath, data) => {
  fs.writeFile(filePath, JSON.stringify(data))
}

const showIdAndName = (filePath) => {
  readContent(filePath)
    .then(result => result.map(item => console.log(`${item.id} - ${item.name}`)))
    .catch(err => console.log(err.message));
}

function findCharacterWithID(id){
  readContent('./simpsons.json')
    .then(result => result.find(curr => Number(curr.id) === id))
    .then(character => console.log(`${character.id} - ${character.name}`))
    .catch(err => console.log('id não encontrado.'));
}

async function removeWithIds(...ids){
  try{
    const filteredCharacters = await readContent('./simpsons.json')
      .then(result => result.filter(character => !ids.includes(Number(character.id))))
    writeFile('./simpsons.json', filteredCharacters)
    console.log('Done');
    showIdAndName('./simpsons.json');
  }catch(err){
    console.log(err.message);
  }
}

async function copyCharactersToNewFile(originalFilePath, newFilePath, ...ids){
  try{
    const filteredCharacters = await readContent(originalFilePath)
      .then(result => result.filter(character => ids.includes(Number(character.id))))
    writeFile(newFilePath, filteredCharacters)
    console.log('Done');
    showIdAndName(newFilePath);
  }catch(err){
    console.log(err.message);
  }
}

async function copyCharacterToFile(originalFilePath, toFilePath, name){
  try{
    const findCharacter = await readContent(originalFilePath)
      .then(result => result.find(character => character.name === name));
    const destinationFile = await readContent(toFilePath)
    writeFile(toFilePath, [...destinationFile, findCharacter]);
    console.log('Done');
    showIdAndName(toFilePath);
  }catch(err){
    console.log('Error: ', err.message);
  }
}

showIdAndName();

findCharacterWithID(100);

removeWithIds(100, 600)

copyCharactersToNewFile('./simpsons.json', './simpsonFamily.json', 1, 2, 3, 4)

copyCharacterToFile('./simpsons.json', './simpsonFamily.json', 'Nelson Muntz')
