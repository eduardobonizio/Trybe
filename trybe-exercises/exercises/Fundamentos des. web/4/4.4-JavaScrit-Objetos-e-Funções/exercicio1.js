function verificaPalindrome(palavra){
  //Tira os espaços da palavra e coloca o texto em caixa baixa
  palavra = palavra.replace(/\s/g, '');
  palavra = palavra.toLowerCase();
  
  //Compara a primeira letra da palavra com a ultima e vai testando uma a uma de fora para dentro |->  <-|
  let repeat = palavra.length;
  for(let i=0; i<repeat; i+=1){
    if(palavra[i] == palavra[palavra.length-1-i]){
      continue;
    }else{
      return "false";
    }
  }
  return "true";
}

console.log(verificaPalindrome("A base do teto desaba"));