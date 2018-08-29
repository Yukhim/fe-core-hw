const post = document.querySelector('.post');

post.addEventListener('focus', handlerFN);
function handlerFN(){
  alert("Hello");
}