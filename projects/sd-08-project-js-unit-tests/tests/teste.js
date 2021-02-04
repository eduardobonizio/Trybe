const terminaCom = (palavra) => {
  for(let i = 0; i < palavra.length; i += 1){
    console.log(palavra[i]);
  }
}

terminaCom('teste123');

const terminaCom2 = (palavra, finalDaPalavra) => {
  if (finalDaPalavra.length > palavra.length) {
    return false
  }

  const final = [];

  for (let i = (palavra.length - finalDaPalavra.length); i < palavra.length; i += 1) {
    final.push(palavra[i])
  }

  if (final.join('') === finalDaPalavra) {
    console.log(`${final.join('')} é igual a ${finalDaPalavra}`);
  } else {
    console.log(`${final.join('')} não é igual a ${finalDaPalavra}`);
  }
}

terminaCom2('teste123', '123');
console.log('------------------');
terminaCom2('te123ste', '123');