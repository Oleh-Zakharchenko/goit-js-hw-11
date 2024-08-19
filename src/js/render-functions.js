import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionsDelay: 2000 });

export function createGalleryMarkup(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      (image) => `
    <div class="photo-card">
      <a href="${image.largeImageURL}" data-lightbox="gallery-item" data-title="${image.tags}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info" style="display: none;">
        <p><i class="img-text">Likes </i><span>${image.likes}</span></p>
        <p><i class="img-text">Views </i><span>${image.views}</span></p>
        <p><i class="img-text">Comments </i><span>${image.comments}</span></p>
        <p><i class="img-text">Downloads </i><span>${image.downloads}</span></p>
      </div>
    </div>
  `
    )
    .join('');
  lightbox.refresh();
  
  setTimeout(() => {
    document.querySelectorAll('.info').forEach(info => {
      info.style.display = 'block';
    });
  }, 2000);
}
