import { fetchImages } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createGalleryMarkup } from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value.trim();
  
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query',
    });
    return;
  }
  
  loader.style.display = 'block';
  fetchImages(query)
    .then(data => {
      loader.style.display = 'none';
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
      } else {
        createGalleryMarkup(data.hits);
      }
    })
    .catch(error => {
      loader.style.display = 'none';
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.'
      });
    });
  
  input.value = '';
});