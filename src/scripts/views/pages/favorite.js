import FavoriteRestoIdb from '../../data/FavoriteRestoIdb.js';
import { RestaurantCardTemplate } from '../templates/restaurant-card.js';
import '../../../styles/resto.scss';
import { Jumbotron } from '../templates/jumbotron';
const Favorite = {
  async render() {
    this._setTitle();

    return `
            ${Jumbotron.create()}
  <section id="main" class="container" tabindex="0">
            <h2 tabindex="0">My Favorite Restaurant</h2>
            <p tabindex="0">Daftar Restaurant Favorit</p>
            <div class="loader" aria-label="Sedang Memuat Data"></div>
            <div class="lists">
            </div>
        </section>
    `;
  },

  async afterRender() {
    this.loadingIndicator = document.querySelector('.loader');
    this._showLoading();
    try {

      const restaurants = await FavoriteRestoIdb.getAllRestos();
      const restaurantsContainer = document.querySelector('.lists');
      if (restaurants.length > 0) {
        restaurants.forEach((restaurant) => {
          const restaurantCard = RestaurantCardTemplate.create(restaurant);
          restaurantsContainer.appendChild(restaurantCard);
        });
      } else {
        restaurantsContainer.innerHTML = `
          <p tabindex="0">No Favorite Resto</p>
        `;
      }
    } catch (e) {
      document.querySelector('.lists').innerHTML = `
        <p tabindex="0">Failed to load restaurants. Please try again later.</p>
      `;
    } finally {
      this._hideLoading();
    }
  },

  _setTitle() {
    document.title = 'Lurker Feast';
  },

  _hideLoading() {
    this.loadingIndicator.style.display = 'none';
  },

  _showLoading() {
    this.loadingIndicator.style.display = 'block';
  }
};

export default Favorite;
