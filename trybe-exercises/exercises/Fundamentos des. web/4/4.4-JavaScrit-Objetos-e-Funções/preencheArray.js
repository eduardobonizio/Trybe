let quantChars = 99;

//Gera array com valores aleatórios
function geraArray () {
    let array = [];
    for (let index = 0; index < quantChars; index += 1) {
        let newCaracter = letraAleatoria();
        array.push(newCaracter);
    }
    return array;
  };
  
  //Escolhe uma letra aleatória
  function letraAleatoria(){
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVXZ";
    let letra = alfabeto[(Math.round(Math.random(0) * (alfabeto.length-1)))];
    return letra;
  }

console.log(geraArray());