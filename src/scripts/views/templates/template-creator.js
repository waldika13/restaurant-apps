import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="movie__title">${resto.restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" alt="${resto.restaurant.name}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${resto.restaurant.address}</p>
  </div>
`;

const createRestoItemTemplate = (resto) => `
  <div class="movie-item">
    <div class="movie-item__header">
        <img class="movie-item__header__poster" alt="${resto.restaurant.name}"
            src="${resto.restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="movie-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${resto.restaurant.rating}</span></p>
        </div>
    </div>
    <div class="movie-item__content">
        <h3><a href="${`/#/detail/${resto.restaurant.id}`}">${resto.restaurant.name}</a></h3>
        <p>${resto.restaurant.description}</p>
    </div>
  </div>
  `;

export { createRestoDetailTemplate, createRestoItemTemplate };
