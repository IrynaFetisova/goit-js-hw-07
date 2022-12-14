import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryRef = document.querySelector('.gallery');
const galleryPic = [...galleryItems].map(({preview, original, description}) => `<a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
/>
</a>`);

const markup = galleryPic.join('');
galleryRef.insertAdjacentHTML('beforeend', markup);
console.log(galleryItems);


galleryRef.addEventListener("click", showPicture);

function showPicture (event) {
    blockStandartAction(event);
    if (event.target.nodeName != "IMG") {
        return;
    };

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`, {
      onShow: () => {
        document.addEventListener("keydown", PressEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", PressEsc);
      },
    });
    instance.show();
};

function blockStandartAction(event) {
    event.preventDefault()
};

