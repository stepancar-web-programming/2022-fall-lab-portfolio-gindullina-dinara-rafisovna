const quoteArray = ['Добро пожаловать на официальную страницу Динары Гиндуллиной'];
const index = 0;
let textPosition = 0;
let flag = true;
const button = document.getElementById('Infobutton');
let openPopup = document.getElementsByClassName("open-popup")[0];
let popupContainer = document.getElementsByClassName("popup-container")[0];
const closeButton = document.getElementsByClassName("close-button")[0];

document.getElementById('greeting-text').textContent = 'Гиндуллина Динара Рафисовна'; // просто было интересно так вставить текст

function typewriter() {
  if (flag) {
    quoteArray[index] += ' ';
    flag = false;
  }
  text = quoteArray[index].substring(0, textPosition)
  document.querySelector('#quote').innerHTML =text+'<span>\u25AE</span>';
  textPosition += 1;
  if (textPosition !== quoteArray[index].length) {
    setTimeout(() => {
      typewriter();
    }, 100);
  } else {
    textPosition = 0;
    flag = true;
    setTimeout(() => {
      typewriter();
    }, 10000);
  }
}

function popup(){
  openPopup.addEventListener('click',()=>{
    popupContainer.style.display = 'flex'
  });
  closeButton.addEventListener('click',()=>{
    popupContainer.style.display = 'none'
  });
}

window.addEventListener('load', typewriter);
button.addEventListener('click', popup);
