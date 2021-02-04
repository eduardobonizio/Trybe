let clickCount = 0;
document.querySelector('#click-me').addEventListener('click', function (){
 clickCount += 1;
 document.querySelector('#click-count').innerHTML = `Quantidade de clicks: ${clickCount}`
})