const replaceX = (frase) => {
 const array = frase.split('');
 array[array.indexOf('x')] = "Bebeto";
 console.log(array.join(''));
};

replaceX('Tryber x aqui!')