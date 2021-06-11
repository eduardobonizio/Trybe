function returnPromise(firstNumber, secondNumber, thirdNumber){
  const p = new Promise((resolve, reject) =>{
    if(isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) reject(Error('Informe apenas números'));

    const calc = (firstNumber + secondNumber) * thirdNumber;
    if(calc < 50) reject(Error('Valor muito baixo'))
    resolve(calc);
  })
  return p;
}


const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);

returnPromise(generateRandomNumber(), generateRandomNumber(), generateRandomNumber())
  .then((result) => console.log(`.then result: ${result}`))
  .catch(err => console.log(`Error in .then: ${err.message}`))


const asyncPromisse = async () => {
  try{
    const result = await returnPromise(generateRandomNumber(), generateRandomNumber(), generateRandomNumber())
    console.log(`Async / await result: ${result}`)
  }catch(err){
    console.log(`Async / await error: ${err.message}`)
  }
}

asyncPromisse()
