import { RestoRestAPI } from '../../data/RestoRestAPI';

export const RestaurantCardTemplate = {
  create: (restaurant) => {
    const restaurantCard = document.createElement('div');
    restaurantCard.classList.add('card');

    restaurantCard.innerHTML = `
        <img class="lazyload" data-src="${RestoRestAPI.getImageUrl(restaurant.pictureId, 'medium')}" 
        alt="Image of ${restaurant.name}" class="card-image">
      <span class="restaurant-city-tag" 
            tabindex="0">${restaurant.city}</span>
      <div class="restaurant-card-body">
        <div class="right">
          <!-- Rating before the name -->
          <p class="restaurant-card-rating" tabindex="0">
            <b>Rating:</b> ${restaurant.rating}
          </p>
          <h3 class="restaurant-card-title" tabindex="0"><a href="/#/detail/${restaurant.id}" aria-label="View details of ${restaurant.name}">
          ${restaurant.name}
        </a></h3>
          <p class="restaurant-card-description" tabindex="0">${restaurant.description}</p>
        </div>
      </div>
    `;

    return restaurantCard;
  },
};
