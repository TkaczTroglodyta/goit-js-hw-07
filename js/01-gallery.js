import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBoxes = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
);

gallery.insertAdjacentHTML('beforeend', galleryMarkup.join(''));
gallery.addEventListener('click', handleGalleryClick);

console.log(galleryItems);
