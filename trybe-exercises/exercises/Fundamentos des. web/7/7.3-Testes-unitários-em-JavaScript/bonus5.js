// Create a Password verifications class called “PasswordVerifier”.

// Add the following verifications to a master function called “Verify()”

// password should be larger than 8 chars
// password should not be null
// password should have one uppercase letter at least
// password should have one lowercase letter at least
// password should have one number at least
// https://github.com/CodeYourFuture/js-exercises-tdd/tree/master/III.tdd-katas/password-verifier

const assert = require('assert');


const checkLowerCase = (array) => {
  for (let index in array) {
    if (isNaN(array[index]) && array[index] === array[index].toLowerCase()) {
      return true;
    }
  };
  return false;
};

const checkUperCase = (array) => {
  for (let index in array) {
    if (isNaN(array[index]) && array[index] === array[index].toUpperCase()) {
      return true;
    }
  };
  return false;
};

const checkNumber = (array) => {
  for (let index in array) {
    if (!isNaN(array[index])) {
      return true;
    }
  };
  return false;
};


const verify = (password) => {
  if(password.length < 8 || password === null){
    throw new Error('Your password should have at least 8 char');
  }

  const arrayPassword = password.split('');
  let number = checkNumber(arrayPassword);
  let lowerCase = checkLowerCase(arrayPassword);
  let uperCase = checkUperCase(arrayPassword);
  if(number && lowerCase && uperCase){
    return true;
  }
  return false;
}

const passwordTry = 'aaAa1aaaa';
const otherPass = '147258369';
const anotherPass = '147258369';
const correctPass = 'Eduardo Augusto Bonizio123';

assert.strictEqual(verify(passwordTry), true)
assert.strictEqual(verify(otherPass), false)
assert.strictEqual(verify(anotherPass), false)
assert.strictEqual(verify(correctPass), true)