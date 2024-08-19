import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import "simplelightbox/dist/simple-lightbox.min.css";
import { createGalleryMarkup } from './render-functions.js';

const API_KEY = '45522056-70580155eac140dfe7225b3e6';

export function fetchImages(query) {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
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
            console.error('Error fetching images:', error);
            loader.style.display = 'none';
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later.'
            });
        });
}