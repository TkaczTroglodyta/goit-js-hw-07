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
            alt="${description}"
          />
        </a>
      </li>`
); // markup images into HTML page without 'data-source="${original}"'

galleryBoxes.insertAdjacentHTML('beforeend', galleryMarkup.join('')); // inserting markup into <ul> tag

let galleryImages = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 450,
  scrollZoom: false,
  scaleImageToRatio: true,
});

console.log(galleryItems);
