import { RestoRestAPI } from '../../data/RestoRestAPI';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/restaurant-detail-template';
import '../../../styles/detail.scss';
import { Jumbotron } from '../templates/jumbotron';
import FavoriteRestoIdb from '../../data/FavoriteRestoIdb';

export default class RestaurantDetailPage {
  constructor(){
    this._addRestoToFavorite = this._addRestoToFavorite.bind(this);
    this._deleteRestoFromFavorite = this._deleteRestoFromFavorite.bind(this);
  }

  async render() {
    return `
      ${Jumbotron.create()}
      <section id="main" class="container">
        <div class="loader" aria-label="Loading restaurant details..."></div>
        <div id="restaurant-detail"></div>
      </section>
    `;
  }

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const main = document.querySelector('#restaurant-detail');
    const isLiked = await this._isRestoExist(url.id);
    console.log(isLiked);

    const loader = document.querySelector('.loader');
    this._showLoading(loader);

    const restaurantDetails = await RestoRestAPI.getRestoById(url.id);

    if (!restaurantDetails) {
      main.innerHTML = '<p>Restaurant details not found.</p>';
      return;
    }

    main.innerHTML = createRestaurantDetailTemplate(restaurantDetails, isLiked);

    this._hideLoading(loader);

    const likeButton = document.getElementById('likeButton');
    if (isLiked) {
      likeButton.addEventListener('click', this._deleteRestoFromFavorite);
      likeButton.removeEventListener('click', this._addRestoToFavorite);
    } else {
      likeButton.addEventListener('click', this._addRestoToFavorite);
      likeButton.removeEventListener('click', this._deleteRestoFromFavorite);
    }
  }


  _showLoading(loader) {
    loader.style.display = 'block';
  }

  _hideLoading(loader) {
    loader.style.display = 'none';
  }

  async _addRestoToFavorite() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    this._restaurant = await RestoRestAPI.getRestoById(url.id);
    FavoriteRestoIdb.putResto(this._restaurant);
    this._reRender();
    this.afterRender();
  }

  async _deleteRestoFromFavorite() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    this._restaurant = await RestoRestAPI.getRestoById(url.id);
    FavoriteRestoIdb.deleteResto(this._restaurant.id);
    this._reRender();
    this.afterRender();
  }

  async _isRestoExist(id) {
    const restaurant = await FavoriteRestoIdb.getResto(id);
    return !!restaurant;
  }

  _reRender() {
    this.afterRender();
  }
}
