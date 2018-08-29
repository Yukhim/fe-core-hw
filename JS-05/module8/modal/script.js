const page = document.querySelector('.page');
const openModalButton = document.querySelector('.js-open-modal');
const closeModalButton = document.querySelector('.button[data-action = "close-modal"');


openModalButton.addEventListener('click', handlerOpen);
closeModalButton.addEventListener('click', handlerClose)

function handlerOpen(){
  page.classList.add('show-modal');

  window.addEventListener('keydown', escClose);
}

function handlerClose(){
  page.classList.remove('show-modal');
  window.removeEventListener('keydown', escClose);
}


function escClose(event){
const key = event.code;
if(key == "Escape"){
  handlerClose();
}
}