import 'simplelightbox/dist/simple-lightbox.min.css';

import SimpleLightbox from 'simplelightbox';

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryItemLayout = galleryItem =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
  <img
  class="gallery__image"
  src="${galleryItem.preview}"
  data-source="${galleryItem.original}"
  alt="${galleryItem.description}"
  />
  </a>
  </li>
  `;

(() => {
  const items = galleryItems.map(item => galleryItemLayout(item)).join('');
  gallery.insertAdjacentHTML('afterbegin', items);
})();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
