/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../data/FavoriteRestoIdb.js';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/like-button.js';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    // console.log('Initializing with restaurant:', restaurant);

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    const isRestaurantExist = await FavoriteRestoIdb.getResto(id);

    if (isRestaurantExist) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      if (!this._restaurant.id) {
        console.log('restaurant has no id');
        return;
      }
      await FavoriteRestoIdb.putResto(this._restaurant);
      const allRestaurant = await FavoriteRestoIdb.getAllRestos();
      console.log('current restaurant in database', allRestaurant);
      this._renderLiked();
    });
  },

  async _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      if (!this._restaurant.id) {
        console.log('restaurant has no id');
        return;
      }
      await FavoriteRestoIdb.deleteResto(this._restaurant.id);
      this._renderLike();
    });
  },
};

export default LikeButtonInitiator;
