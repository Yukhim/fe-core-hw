/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/


const inputs = document.querySelector('.inputs');
const input = inputs.querySelector('input')
inputs.addEventListener('focus', handlerCheck, true);
inputs.addEventListener('blur', handlerAdd, true);

function handlerCheck(evt){
  const inputLength = input.dataset.length;
  console.log(input.value.length);
  if(evt.target.dataset.length !==evt.target.value.length){
    evt.target.classList.add('red');
  }
  
}

function handlerAdd(evt){
  if(evt.target.dataset.length ===evt.target.value.length){
    evt.target.classList.add('green');
  }
}