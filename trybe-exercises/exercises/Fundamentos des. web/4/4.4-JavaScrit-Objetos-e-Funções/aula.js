//Cria objeto
let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickname: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    //Cria um objeto dentro de singer
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

//Acessa dados do objeto
console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

console.log('------------------------------------------');

//Cria propriedade
singer['fullName'] = singer.name + ' ' + singer.lastName;

/*
//Mostra o conteúdo do objeto dentro de uma tabela
console.table(singer);
*/

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state);

console.log('------------------------------------------');

//Perco todo o objeto e imprime o valor da chave na posição i (começa em 0 e vai até o fim do objeto)
for (let i in singer){
    console.log(singer[i]);
}

console.log('------------------------------------------');

//Percorre todo o objeto e mostra tanto o nome da chave quanto o valor dela
for (let i in singer){
    console.log(i, singer[i]);
}
