import routes from '../routes/routes';
import SidebarInitiator from '../utils/sidebar-initiator';
import NotFoundPage from './pages/NotFoundPage';

class App {
  constructor({ showButton, closeButton, sidebar, overlay, content }) {
    this._showButton = showButton;
    this._closeButton = closeButton;
    this._sidebar = sidebar;
    this._overlay = overlay;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    SidebarInitiator.init({
      showButton: this._showButton,
      closeButton: this._closeButton,
      sidebar: this._sidebar,
      overlay: this._overlay,
    });
  }

  async renderPage() {
    const url = window.location.hash.slice(1).toLowerCase() || '/';
    let matchedRoute = null;
    const params = {};

    Object.keys(routes).forEach((route) => {
      const routePattern = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`);
      const match = url.match(routePattern);
      if (match) {
        matchedRoute = route;
        const keys = route.match(/:(\w+)/g) || [];
        keys.forEach((key, index) => {
          params[key.substring(1)] = match[index + 1];
        });
      }
    });

    const page = routes[matchedRoute] || NotFoundPage;

    this._content.innerHTML = await page.render(params);
    await page.afterRender(params);
  }
}

export default App;