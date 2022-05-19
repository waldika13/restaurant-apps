<<<<<<< HEAD
=======
/* eslint-disable no-empty-function */
/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
>>>>>>> 1141202093e624b06405dccd599843e25db893de
import { openDB } from 'idb';

import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getResto(id) {
<<<<<<< HEAD
=======
    if (!id) {
      return;
    }

>>>>>>> 1141202093e624b06405dccd599843e25db893de
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putResto(resto) {
<<<<<<< HEAD
=======
    if (!resto.hasOwnProperty('id')) {
      return;
    }

>>>>>>> 1141202093e624b06405dccd599843e25db893de
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
<<<<<<< HEAD
=======
  async searchResto(qeury) {

  },
>>>>>>> 1141202093e624b06405dccd599843e25db893de
};

export default FavoriteRestaurantIdb;
