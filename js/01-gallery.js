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

galleryBoxes.insertAdjacentHTML('beforeend', galleryMarkup.join(''));
galleryBoxes.addEventListener('click', handleGalleryClick);

function handleGalleryClick(e) {
  e.preventDefault();
  const { target } = e;
  if (target.nodeName !== 'IMG') {
    return;
  }

  const { source } = target.dataset;
  const instance = basicLightbox.create(`<img src="${source}" width="800" heigth="534">`, {
    onShow: () => document.addEventListener('keydown', handleImgClose),
    onclose: () => document.removeEventListener('keydown', handleImgClose),
  });

  const handleImgClose = e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  };
  instance.show();
}

console.log(galleryItems);
