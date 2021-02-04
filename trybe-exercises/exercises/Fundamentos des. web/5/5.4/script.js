const getBody = document.querySelector('body');

window.onload = loadItems;

function loadItems(){
    getBody.style.backgroundColor = localStorage.getItem("bgColor");
    getBody.style.color = localStorage.getItem("fontColor");
}

function topMenu(idName, pName, className) {
    let colors = ["black", "green", "red", "gray", "white"]
    let topDiv = document.querySelector('#top-bar');

    //Cria a div que armazena as cores
    let newDiv = document.createElement('div');
    newDiv.id = idName;
    newDiv.style.maxWidth = (colors.length * 20) + 'px';
    newDiv.style.display = 'inline-block';
    newDiv.style.paddingLeft = "5px";
    newDiv.style.textAlign = 'Center';
    topDiv.appendChild(newDiv);

    //Cria o texto indicando que são as cores de fundo
    let newP = document.createElement('p')
    newP.innerHTML = pName;
    newP.style.fontSize = "12px";
    newDiv.appendChild(newP)

    //Cria os quadrados coloridos do bg
    for (let i = 0; i < colors.length; i += 1) {
        let newSquare = document.createElement('div');
        newSquare.className = className;
        newSquare.style.width = '20px';
        newSquare.style.height = '20px';
        newSquare.style.backgroundColor = colors[i];
        newSquare.style.display = 'inline-block';
        newDiv.appendChild(newSquare);
    }
}

//Passa o ID da div que será criada, o titulo do que ela mudará e a classe dos elementos
topMenu("bgColors", "Background Color", "bg-color");
topMenu("fontColor", "Font Color", "font-color");

function changeColors(){
    //Aplica a cor de fundo selecionada
    let allBgColors = document.querySelectorAll('.bg-color');
    for(let i = 0; i < allBgColors.length; i += 1){
        allBgColors[i].addEventListener('click', function(event){
            let newBgColor = event.target.style.backgroundColor;
            localStorage.setItem("bgColor", newBgColor);
            getBody.style.backgroundColor = newBgColor;
        })
    }

    //Aplica a cor selecionada a fonte
    let allFontColors = document.querySelectorAll('.font-color');

    for(let i = 0; i < allFontColors.length; i += 1){
        allFontColors[i].addEventListener('click', function(event){
            let newFontColor = event.target.style.backgroundColor;
            localStorage.setItem("fontColor", newFontColor);
            getBody.style.color = newFontColor;
        })
    }
}
changeColors();