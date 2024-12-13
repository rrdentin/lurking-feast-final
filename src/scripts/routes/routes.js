import RestaurantPage from '../views/pages/RestaurantPage';
import ContactUsPage from '../views/pages/ContactUsPage';
import RestaurantDetailPage from '../views/pages/RestaurantDetailPage';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': new RestaurantPage(),
  '/favorite': Favorite,
  '/contact-us': new ContactUsPage(),
  '/detail/:id': new RestaurantDetailPage()
};

export default routes;
