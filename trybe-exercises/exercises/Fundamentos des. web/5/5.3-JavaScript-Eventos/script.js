function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function insertDaysOfTheWeek() {
    let getUlDays = document.querySelector("#days");
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let newLi = document.createElement('li');
        let elementoAtual = dezDaysList[i];

        if (elementoAtual == 25) {
            newLi.className = 'day holiday friday'
            newLi.innerHTML = elementoAtual;
            getUlDays.appendChild(newLi);
        } else if (elementoAtual == 24 || elementoAtual == 31) {
            newLi.className = 'day holiday'
            newLi.innerHTML = elementoAtual;
            getUlDays.appendChild(newLi);
        } else if (elementoAtual == 4 || elementoAtual == 11 || elementoAtual == 18) {
            newLi.className = 'day friday'
            newLi.innerHTML = elementoAtual;
            getUlDays.appendChild(newLi);
        } else {
            newLi.className = 'day'
            newLi.innerHTML = elementoAtual;
            getUlDays.appendChild(newLi);
        }
    }
}

insertDaysOfTheWeek();

function createButton(string) {
    let newButton = document.createElement('button');
    if (string == "Feriados") {
        newButton.id = 'btn-holiday';
    } else if (string == "Sexta-feira") {
        newButton.id = 'btn-friday';
    }

    newButton.textContent = string;
    let getButtonsContainer = document.querySelector('.buttons-container');
    getButtonsContainer.appendChild(newButton);
}

createButton("Feriados");
createButton("Sexta-feira");

function paintHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    getHolidayButton.addEventListener('click', function () {
        let getAllHolidays = document.querySelectorAll('.holiday');
        for (let i = 0; i < getAllHolidays.length; i += 1) {
            if (getAllHolidays[i].style.backgroundColor == 'blue') {
                getAllHolidays[i].style.backgroundColor = 'rgb(238,238,238)'
            } else {
                getAllHolidays[i].style.backgroundColor = 'blue';
            }
        }
    })
}

paintHolidays();

function paintFridays() {
    let getFridays = document.querySelector('#btn-friday');
    getFridays.addEventListener('click', function () {
        let getAllFridays = document.querySelectorAll('.friday');
        for (let i = 0; i < getAllFridays.length; i += 1) {

            if (getAllFridays[i].innerHTML == 'SEXTOU') {
                getAllFridays[i].innerHTML = Number(getAllFridays[i].previousSibling.innerHTML) + 1;
            } else {
                getAllFridays[i].innerHTML = 'SEXTOU';
            }
        }
    })
}
paintFridays();

function zoom() {
    let getAllDays = document.querySelectorAll('.day');
    for (let i = 0; i < getAllDays.length; i += 1) {
        getAllDays[i].addEventListener('mouseover', function (event) {
            let elementoAtual = event.target;
            elementoAtual.style.fontSize = '30px'
        })
    }
    for (let i = 0; i < getAllDays.length; i += 1) {
        getAllDays[i].addEventListener('mouseout', function (event) {
            let elementoAtual = event.target;
            elementoAtual.style.fontSize = '20px'
        })
    }
}

zoom();

function novaTarefa(task, color) {
    let tasks = document.querySelector('.my-tasks');
    let newTask = document.createElement('span');
    let lineBreak = document.createElement('br');

    newTask.innerHTML = task;
    tasks.appendChild(newTask);

    let newLegend = document.createElement('div');
    newLegend.className = 'task';
    newLegend.style.backgroundColor = color;
    tasks.appendChild(newLegend);
    tasks.appendChild(lineBreak);
}

novaTarefa("Passar um café", "green");

function selectTask() {
    let task = document.querySelectorAll('.task');
    for (let i = 0; i < task.length; i += 1) {
        task[i].addEventListener('click', function (event) {
            if (task[i].className == "task") {
                task[i].className = "task selected";
            } else {
                task[i].className = "task";
            }
        })
    }
}
selectTask();

function dayTask() {
    let getAllDays = document.querySelectorAll('.day');
    for (let i = 0; i < getAllDays.length; i += 1) {
        getAllDays[i].addEventListener('click', function (event) {
            let colorOfTaskSelected = document.querySelector('.selected').style.backgroundColor;
            let elementoAtual = event.target;
            if (elementoAtual.style.color != colorOfTaskSelected) {
                elementoAtual.style.color = colorOfTaskSelected;
            } else {
                elementoAtual.style.color = "rgb(119,119,119)";
            }
        })
    }
}

dayTask();

function addNewTask() {
    let addButton = document.getElementById('btn-add');
    let addWithEnter = document.getElementById('task-input');

    addButton.addEventListener('click keycode', function (event) {
        let textBoxValue = document.getElementById('task-input').value;
        if (textBoxValue == "") {
            alert("Insira um nome para a nova tarefa")
        } else {
            novaTarefa(textBoxValue, "green");
        }
    })

    addWithEnter.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            let textBoxValue = document.getElementById('task-input').value;
            if (textBoxValue == "") {
                alert("Insira um nome para a nova tarefa")
            } else {
                novaTarefa(textBoxValue, "green");
            }
        }
    })
}

addNewTask();