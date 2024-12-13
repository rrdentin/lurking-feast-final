import '../../../styles/contact-us.scss';
import { Jumbotron } from '../templates/jumbotron';

export default class ContactUsPage {
  render() {
    this._setTitle();
    return `
            ${Jumbotron.create()}
<section id="contact-us" class="container" tabindex="0">
  <div class="contact-us-container" tabindex="0">
    <h1 tabindex="0">Contact Us</h1>
    <p class="intro-text" tabindex="0">
      Welcome to our platform, your ultimate guide to discovering the best restaurants in town. 
      Whether you're a foodie, a casual diner, or someone looking for the perfect dining experience, 
      we've got you covered.          
    </p>

    <div class="social-links" tabindex="0">
      <h3 tabindex="0">Connect or Contact Us</h3>
      <ul>
        <li>
          <a href="https:/daintycube.my.id" target="_blank" rel="noopener noreferrer" aria-label="Visit our website">
            <i class="fa-solid fa-globe"></i> Website
          </a>
        </li>
        <li>
          <a href=https://www.linkedin.com/in/rrdentin/" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn profile">
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:denti.dona@gmail.com" aria-label="Send us an email">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>`;
  }

  _setTitle() {
    document.title = 'Contact Us';
  }

  afterRender() {}
}
