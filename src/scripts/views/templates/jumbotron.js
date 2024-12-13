export const Jumbotron = {
  create: () => {
    const section = document.createElement('section');
    section.classList.add('jumbotron');

    const divElement = document.createElement('div');
    divElement.classList.add('container');
    divElement.classList.add('lazyload');

    const h2 = document.createElement('h2');
    h2.setAttribute('tabindex', '0');
    h2.textContent = 'Welcome to Lurker Feast';

    const p = document.createElement('p');
    p.setAttribute('tabindex', '0');
    p.textContent = 'Lurk The Top Restaurant In Indonesia';

    divElement.appendChild(h2);
    divElement.appendChild(p);
    section.appendChild(divElement);

    // Set the background image based on screen size
    function setBackgroundImage() {
      if (window.innerWidth < 600) {
        divElement.style.backgroundImage = 'url("/images/hero-image_4-small.jpg")';
      } else {
        divElement.style.backgroundImage = 'url("/images/hero-image_4-large.jpg")';
      }
    }

    // Call it initially
    setBackgroundImage();

    // Update the background image when the window is resized
    window.addEventListener('resize', setBackgroundImage);

    return section.outerHTML;
  }
};
