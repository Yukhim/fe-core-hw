const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

// document.addEventListener('DOMContentLoaded', () => {


const imageGallery = document.querySelector('.js-image-gallery');

imageGallery.insertAdjacentHTML("afterbegin", `<div class="fullview"><img src="img/fullview-1.jpeg" alt="alt text 1"></div>`);
imageGallery.insertAdjacentHTML("beforeend", `<ul class="preview">`)
const preview = document.querySelector('.preview');
const img = document.querySelector('img');
preview.addEventListener('click', handlerImg);

function handlerImg(evt){
evt.preventDefault();
img.setAttribute('src', `${evt.target.dataset.fullview}`);
  console.log(evt.target.dataset.fullview);
}



function createMarkup(arr){
for(let i = arr.length-1; i>=0; i--){
  
  preview.insertAdjacentHTML("afterbegin", `<li><img src='${arr[i].preview}' data-fullview='${arr[i].fullview}' alt='${arr[i].alt}'></li>`);
}
  
} 
  


createMarkup(galleryItems)

// }
