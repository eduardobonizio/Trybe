const centerContent = document.querySelector('.center-content');

//Carrega a lista de tarefa que foi salva
window.onload = function () {
    let taskList = document.querySelector('#lista-tarefas');
    let taskListToLoad = localStorage.getItem('taskList');
    taskList.innerHTML = taskListToLoad;

    let allTaks = document.querySelectorAll('li');

    if(allTaks.length < 1){}
    else{
        for(let i = 0; i < allTaks.length; i+= 1){
            addListenersToListItem(allTaks[i]);
        }
    }
};

//Cria o header e o texto que explica
createBasics();
buttonDeleteAll();
buttonDeleteFinished();
saveTasks();
buttonMoveTask();
buttonRemoveSelected();

function createBasics() {
    //Cria o header
    let section = document.createElement('section');
    section.innerHTML = 'Minha Lista de Tarefas';
    centerContent.appendChild(section);

    //Cria o parágrafo
    let instruction = document.createElement('p');
    instruction.id = 'funcionamento';
    instruction.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
    centerContent.appendChild(instruction);

    //Chama a função que cria o input e botão de add
    createInput();

    //Cria a lista ordenada
    let list = document.createElement('ol');
    list.id = 'lista-tarefas';
    centerContent.appendChild(list);
}

function createInput() {

    //Cria section
    let div = document.createElement('div');
    centerContent.appendChild(div);

    //Cria input
    let input = document.createElement('input');
    input.id = 'texto-tarefa';
    div.appendChild(input);

    //Cria o botão
    let button = document.createElement('button');
    button.id = 'criar-tarefa';
    button.innerHTML = 'Criar';

    //Adiciona ao botão a função de adicionar itens a lista e limpar o input
    button.addEventListener('click', function () {
        let lista = document.querySelector('#lista-tarefas');
        let novaTarefa = document.querySelector('#texto-tarefa').value;

        //Cria a nova linha, adiciona o texto a ela e associa a lista
        let novaLinha = document.createElement('li');
        novaLinha.innerHTML = novaTarefa;
        novaLinha.className = '';
        addListenersToListItem(novaLinha);
        lista.appendChild(novaLinha);

        //Limpa o campo input
        document.querySelector('#texto-tarefa').value = '';
    })

    div.appendChild(button);
}

function addListenersToListItem(listItem) {

    //Adiciona um listener a essa nova linha para que quando for clicado troque a cor de fundo
    listItem.addEventListener('click', function (event) {
        let getAllListItems = document.querySelectorAll('li');
        for (let i = 0; i < getAllListItems.length; i += 1) {
            getAllListItems[i].style.backgroundColor = '';
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    })

    //Adiciona um listener a essa nova linha para que quando for clicado duas vezes o texto fique riscado
    listItem.addEventListener('dblclick', function (event) {

        let checkClasses = event.target.className;

        if (checkClasses == '') {
            event.target.className = 'completed';
        } else {
            event.target.className = '';
        }
    })
}

function buttonDeleteAll() {
    let div = document.createElement('div');
    div.id = 'options-buttons';
    centerContent.appendChild(div);

    let button = document.createElement('button');
    button.id = 'apaga-tudo';
    button.innerHTML = 'Apagar tudo';

    button.addEventListener('click', function () {
        let getTaskList = document.querySelector('#lista-tarefas');
        let getAllItems = document.querySelectorAll('li');

        for (let i = 0; i < getAllItems.length; i += 1) {
            getTaskList.removeChild(getAllItems[i]);
        }

    })

    div.appendChild(button);
}

function buttonDeleteFinished() {
    const optionsButtons = document.querySelector('#options-buttons');
    let button = document.createElement('button');
    button.id = 'remover-finalizados';
    button.innerHTML = 'Remover finalizados';

    button.addEventListener('click', function () {
        let getTaskList = document.querySelector('#lista-tarefas');
        let getAllFinished = document.querySelectorAll('.completed');

        for (let i = 0; i < getAllFinished.length; i += 1) {
            getTaskList.removeChild(getAllFinished[i]);
        }

    })
    optionsButtons.appendChild(button);
}

function saveTasks() {
    const optionsButtons = document.querySelector('#options-buttons');
    let button = document.createElement('button');
    button.id = 'salvar-tarefas';
    button.innerHTML = 'Salvar tarefas';

    button.addEventListener('click', function () {
        let getAllListItems = document.querySelectorAll('li');
        for (let i = 0; i < getAllListItems.length; i += 1) {
            getAllListItems[i].style.backgroundColor = '';
        }
        let taskListToSave = document.querySelector('#lista-tarefas').innerHTML;
        localStorage.setItem('taskList', taskListToSave);
    })
    optionsButtons.appendChild(button);
}

function buttonMoveTask() {
    const optionsButtons = document.querySelector('#options-buttons');
    let buttonUp = document.createElement('button');
    buttonUp.id = 'mover-cima';
    buttonUp.innerHTML = 'Mover para cima';

    let buttonDown = document.createElement('button');
    buttonDown.id = 'mover-baixo';
    buttonDown.innerHTML = 'Mover para baixo';

    buttonUp.addEventListener('click', function () {
        let getList = document.querySelector('#lista-tarefas');
        let taskSelected = getSelected();
        let firstChild = getList.firstChild;

        if(taskSelected == firstChild || taskSelected == null){
        }else{
            let previousTask = taskSelected.previousSibling;
            getList.insertBefore(taskSelected, previousTask);
        }
    })

    optionsButtons.appendChild(buttonUp);

    buttonDown.addEventListener('click', function () {
        let getList = document.querySelector('#lista-tarefas');
        let taskSelected = getSelected();
        let lastChild = getList.lastChild;

        if(taskSelected == lastChild || taskSelected == null){
        }else{
            let nextTask = taskSelected.nextSibling;
            getList.insertBefore(nextTask, taskSelected);
        }
    })

    optionsButtons.appendChild(buttonDown);
}

function buttonRemoveSelected() {
    const optionsButtons = document.querySelector('#options-buttons');
    let button = document.createElement('button');
    button.id = 'remover-selecionado';
    button.innerHTML = 'Remover selecionado';

    button.addEventListener('click', function () {
        let getList = document.querySelector('#lista-tarefas')
        getList.removeChild(getSelected());
    })

    optionsButtons.appendChild(button);
}

function getSelected(){
    let allItems = document.querySelectorAll('li');
    for (let i = 0; i < allItems.length; i += 1) {
        if (allItems[i].style.backgroundColor != '') {
            return allItems[i];
        }
    }
}