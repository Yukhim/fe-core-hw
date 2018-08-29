const noteList = document.querySelector('.js-note-editor');
const input = document.querySelector('input');
const list = document.querySelector('.note-list')
noteList.addEventListener('submit', createLiHandler);

function createLiHandler(event){
  event.preventDefault()
const text = input.value;
const markup = generateText(text);
list.insertAdjacentHTML('afterbegin', markup);
}

function generateText(text){

  return `<li class="note">
<p>${text}</p>
<div class="actions">
  <button data-action="delete-note">Delete</button>
  <button data-action="edit-note">Edit</button>
</div>
</li>`


}