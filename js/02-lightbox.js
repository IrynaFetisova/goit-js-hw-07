import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryPic = [...galleryItems].map(({preview, original, description}) => `<a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
/>
</a>`);

const markup = galleryPic.join('');
galleryRef.insertAdjacentHTML('beforeend', markup);
console.log(galleryItems);

galleryRef.addEventListener("click", showPicture);

function showPicture (event) {
    blockStandartAction(event);

    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
    captionDelay: 250,});
}; 

function blockStandartAction(event) {
    event.preventDefault()
};

