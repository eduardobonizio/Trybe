const fs = require('fs/promises')
const {readContent} = require('./exercicio4')

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']


function usingPromiseAll(){
  Promise.all([
    readContent('./simpsons.json'),
    readContent('simpsonFamily.json')
  ]).then(result => console.log(result))
}

async function writingMany(){
   const createPromises = array.map((element, index) => {
    fs.writeFile(`./file${index + 1}.txt`, element)
    })
  await Promise.all(createPromises).then(done => console.log('done'))
}
