import { RestoRestAPI } from '../../data/RestoRestAPI';
import { RestaurantCardTemplate } from '../templates/restaurant-card';
import '../../../styles/resto.scss';
import { Jumbotron } from '../templates/jumbotron';

export default class RestaurantPage {
  render() {
    this._setTitle();
    return `
        ${Jumbotron.create()}
        <section id="main" class="container" tabindex="0">
            <h2 tabindex="0">Restaurant</h2>
            <p tabindex="0">Daftar Restaurant</p>
            <div class="loader" aria-label="Sedang Memuat Data"></div>
            <div class="lists">
            </div>
        </section>

    `;
  }

  _hideLoading() {
    this.loadingIndicator.style.display = 'none';
  }

  _showLoading() {
    this.loadingIndicator.style.display = 'block';
  }

  _setTitle() {
    document.title = 'Lurker Feast';
  }

  render() {
    this._setTitle();
    return `
      ${Jumbotron.create()}
      <section id="main" class="container" tabindex="0">
          <h2 tabindex="0">Restaurant</h2>
          <div class="loader" aria-label="Loading data"></div>
          <div class="lists"></div>
      </section>
    `;
  }
  async afterRender() {
    this.loadingIndicator = document.querySelector('.loader');

    this._showLoading();
    try {
      const restaurantData = await RestoRestAPI.getRestoList();
      if (!Array.isArray(restaurantData)) {
        console.error('Unexpected data format:', restaurantData);
        throw new Error('Invalid data format. Expected an array.');
      }
      restaurantData.forEach((resto) => {
        const restoCard = RestaurantCardTemplate.create(resto);
        document.querySelector('.lists').appendChild(restoCard);
      });
    } catch (error) {
      document.querySelector('.lists').innerHTML = `
        <p tabindex="0">Failed to load restaurants. Please try again later.</p>
      `;
    } finally {
      this._hideLoading();
    }
  }

}