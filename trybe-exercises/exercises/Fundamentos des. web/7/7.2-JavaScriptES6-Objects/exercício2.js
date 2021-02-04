// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie uma função para mostrar o tamanho de um objeto.
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const allLessons = {

}

const addInObj = (obj, key, value) => {
    obj[key] = value;
}

const showObjKeys = (obj) => {
    console.log(Object.keys(obj));
}

const objSize = (obj) => {
    console.log(Object.keys(obj).length);
}

const objElements = (obj) => {
    console.log(Object.entries(obj));
}

const lessons = () => {
    return Object.assign({}, {lesson1: lesson1}, {lesson2: lesson2}, {lesson3: lesson3});
}

const allInOne = lessons();

const totalStudents = (obj) => {
    let total = 0;
    for(let keys in obj){
        total += obj[keys].numeroEstudantes;
    }
    return total;
}

const getValueByPosition = (obj, pos) => {
    return Object.values(obj)[pos]
}

const checkKeyAndValue = (obj, key, value) => {
    const pairs = Object.entries(obj);
    for(i in pairs){
        if(pairs[i][0] === key && pairs[i][1] === value){
            return true;
        }
    }
    return false;
}

const totalStudentsInAllClasses = (obj) => {
    const allKeys = Object.keys(obj);
    let totalPresents = 0;
    for(i in allKeys){
        totalPresents += (obj[allKeys[i]].numeroEstudantes);
    }
    return totalPresents;
}

const objectArray = Object.entries(allInOne)

console.log(objectArray);

console.log('------------------------------');

objectArray.forEach(([key, value]) => {
    console.log(key); // 'one'
    console.log(value); // 1
  });