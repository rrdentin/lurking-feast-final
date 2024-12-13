import LikeButtonInitiator from '../../src/scripts/utils/like-button';

const createLikeButtonPresenterWithRestaurant =  async () => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButton'),
    restaurant: {
      id: 1,
    },
  });
};
export { createLikeButtonPresenterWithRestaurant };