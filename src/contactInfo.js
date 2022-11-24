const infoText = '<li><a href="mailto:gindullina_2002@mail.ru">Email: gindullina_2002@mail.ru</a></li><br><li><a href="https://telegram.me/blabla9111">Telegram: @blabla9111</a></li><br><li><a href="https://gitlab.com/dinaragindullinaa">Gitlab: dinaragindullinaa</a></li><br><li><a href="https://github.com/blabla9111">Github: blabla9111</a></li>';

function create(htmlStr) {
  const frag = document.createDocumentFragment();
  const temp = document.createElement('div');
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
}

if (document.title === 'Динара Гиндуллина') {
  document.getElementById('indexCInfo').prepend(create(infoText));
  document.getElementById('indexPopup').prepend(create(infoText));
}
if (document.title === 'DMA') {
  document.getElementById('dmaCInfo').prepend(create(infoText));
}
