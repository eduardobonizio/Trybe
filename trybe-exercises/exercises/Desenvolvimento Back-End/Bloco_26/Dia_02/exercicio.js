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
  .then((result) => console.log(result))
  .catch(err => console.log(err.message))
