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
); // markup images into HTML page

galleryBoxes.insertAdjacentHTML('beforeend', galleryMarkup.join('')); // inserting markup into <ul> tag
galleryBoxes.addEventListener('click', handleGalleryClick); // images became clickable

// >> BASIC VERSION without destructurisation and template literals <<

// function handleGalleryClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }

//   // const modalImage = e.target.dataset.source; // to simplify further event target, however not necessary

//   const instance = basicLightbox.create(
//     `<img src="${e.target.dataset.source}" width="800" heigth="534">`,
//     {
//       onShow: () => {
//         document.addEventListener('keydown', handleImgClose);
//       },
//       onclose: () => {
//         document.addEventListener('keydown', handleImgClose);
//       },
//     }
//   );

//   function handleImgClose(e) {
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   }
//   instance.show();
// }

// >> BETTER VERSION with destructurisation and template literals and arrow functions instead 'function handleImgClose(e)' <<

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

// console.log(galleryItems);
