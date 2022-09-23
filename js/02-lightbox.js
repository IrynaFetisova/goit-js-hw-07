import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryPic = [...galleryItems].map(({preview, original, description}) => `<li><a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
/>
</a></li>`);

const markup = galleryPic.join('');
galleryRef.insertAdjacentHTML('beforeend', markup);
console.log(galleryItems);

let lightbox = new SimpleLightbox(".gallery .gallery__link", {
  captionsData: "alt",
  captionDelay: "250ms",
});

