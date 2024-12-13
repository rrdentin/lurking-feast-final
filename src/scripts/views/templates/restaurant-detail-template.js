import { RestoRestAPI } from '../../data/RestoRestAPI';
import { createLikeButtonTemplate, createLikedButtonTemplate } from './like-button';

export const createRestaurantDetailTemplate = (restaurant, isLiked) => {
  if (!restaurant) {
    return '<p tabindex="0">Restaurant details not available</p>';
  }

  const formatList = (items) =>
    items && items.length > 0
      ? items.map((item) => `<li tabindex="0">${item.name}</li>`).join('')
      : "<li tabindex='0'>Not available</li>";

  return `
  <article>
  <img
    class="restaurant-image lazyload"
    src="${RestoRestAPI.getImageUrl(restaurant.pictureId)}"
    alt="Image of ${restaurant.name}"
    tabindex="0"
  />
  <div>
    <h2 tabindex="0">${restaurant.name}</h2>
    <p tabindex="0"><b>City:</b> ${restaurant.city}</p>
    <p tabindex="0"><b>Address:</b> ${restaurant.address}</p>
    <p tabindex="0"><b>Rating:</b> ${restaurant.rating}</p>
    <p tabindex="0">${restaurant.description}</p>
                    ${isLiked ? createLikedButtonTemplate():createLikeButtonTemplate()}

  </div>
</article>
    
    <div class="detail">
      <h3 tabindex="0">Categories</h3>
      <ul>
        ${formatList(restaurant.categories)}
      </ul>
    </div>
    
    <div class="detail">
      <h3 tabindex="0">Menu</h3>
      <h4 tabindex="0">Foods</h4>
      <ul>
        ${formatList(restaurant.menus.foods)}
      </ul>
      <h4 tabindex="0">Drinks</h4>
      <ul>
        ${formatList(restaurant.menus.drinks)}
      </ul>
    </div>
    <div class="detail">
      <h3 tabindex="0">Customer Reviews</h3>
      <div id="reviewsContainer">
        ${
  restaurant.customerReviews && restaurant.customerReviews.length > 0
    ? restaurant.customerReviews
      .map(
        (review) => `
              <div class="review">
                <p tabindex="0"><b>${review.name}:</b> ${review.review} <i>(${review.date})</i></p>
              </div>
            `,
      )
      .join('')
    : '<p tabindex="0">No reviews available</p>'
}
      </div>
    </div>
    
    
  `;
};
