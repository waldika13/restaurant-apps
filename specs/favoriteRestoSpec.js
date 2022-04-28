import { async } from 'regenerator-runtime';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await (await FavoriteRestaurantIdb.getAllResto()).forEach(async (resto) => {
      await FavoriteRestaurantIdb.deleteResto(resto.id);
    }));
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
