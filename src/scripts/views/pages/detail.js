import RestoApiSource from '../../data/restoapi-source';
import UrlParser from '../../routes/url-parser';
<<<<<<< HEAD
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createRestoDetailTemplate } from '../templates/template-creator';
=======
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestoDetailTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
>>>>>>> 1141202093e624b06405dccd599843e25db893de

const Detail = {
  async render() {
    return `
        <h2 align="center">Detail Restaurants</h2><hr><br>
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoApiSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

<<<<<<< HEAD
    LikeButtonInitiator.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
=======
    LikeButtonPresenter.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestaurantIdb,
>>>>>>> 1141202093e624b06405dccd599843e25db893de
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        pictureId: resto.restaurant.pictureId,
        address: resto.restaurant.address,
        city: resto.restaurant.city,
        description: resto.restaurant.description,
        rating: resto.restaurant.rating,
      },
    });
  },
};

export default Detail;
