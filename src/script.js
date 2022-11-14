const quoteArray = ['Добро пожаловать на официальную страницу Динары Гиндуллиной'];
const index = 0;
let textPosition = 0;
let flag = true;
const button = document.getElementById('Infobutton');

document.getElementById('greeting-text').textContent = 'Гиндуллина Динара Рафисовна'; // просто было интересно так вставить текст

$('#infoButton').click(() => {
  window.location.href = 'index.html';
  return false;
});
function typewriter() {
  if (flag) {
    quoteArray[index] += ' ';
    flag = false;
  }

  document.querySelector('#quote').innerHTML = `${quoteArray[index].substring(0, textPosition)}<span>\u25AE</span>`;
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

function popup() {
  $('.open-popup').on('click', () => {
    $('.popup-container').css('display', 'flex');
  });
  $('.close-button').on('click', () => {
    $('.popup-container').css('display', 'none');
  });
}

window.addEventListener('load', typewriter);
button.addEventListener('click', popup);
