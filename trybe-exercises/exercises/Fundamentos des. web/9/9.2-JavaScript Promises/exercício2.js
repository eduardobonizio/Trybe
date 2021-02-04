const promise = new Promise((resolve, reject) => {
    const array = [];

    while (array.length < 9) {
        const newNumber = Math.round(Math.random() * 50);
        array.push(newNumber * newNumber);
    }

    const soma = array.reduce((curr, total = 0) => curr + total);
    console.log(soma);
    if (soma > 8000) {
        return reject();
    }
    resolve(soma);
})
.then((value) => {
    const array = [];
    const dividirPor = [2, 3, 5, 10];
    dividirPor.forEach((number) => {
        array.push(value / number)
    })
    console.log('cheguei aqui');
})
.then((array) => {
    array.reduce((curr, total) => {
        return curr + total;
    })
})
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));