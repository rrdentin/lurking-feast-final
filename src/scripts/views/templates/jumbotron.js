export const Jumbotron = {
  create: () => {
    const section = document.createElement('section');
    section.classList.add('jumbotron');

    const divElement = document.createElement('div');
    divElement.classList.add('container');
    divElement.style.position = 'relative'; // Ensure the container is positioned relative for layering

    const picture = document.createElement('picture');
    picture.style.position = 'absolute'; // Position the picture to cover the container
    picture.style.top = '0';
    picture.style.left = '0';
    picture.style.width = '100%';
    picture.style.height = '100%';
    picture.style.objectFit = 'cover'; // Ensure the image covers the container
    picture.style.zIndex = '0'; // Place the picture below content
    picture.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Add overlay effect

    // Source for small screens
    const sourceSmall = document.createElement('source');
    sourceSmall.setAttribute('media', '(max-width: 599px)');
    sourceSmall.setAttribute('srcset', '/images/hero-image_4-small.jpg');

    const sourceLarge = document.createElement('source');
    sourceLarge.setAttribute('media', '(min-width: 600px)');
    sourceLarge.setAttribute('srcset', '/images/hero-image_4-large.jpg');

    const img = document.createElement('img');
    img.setAttribute('src', '/images/hero-image_4-large.jpg');
    img.setAttribute('alt', 'Hero image for Lurker Feast');
    img.classList.add('lazyload');
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';

    // Append sources and img to the picture element
    picture.appendChild(sourceSmall);
    picture.appendChild(sourceLarge);
    picture.appendChild(img);

    const h2 = document.createElement('h2');
    h2.setAttribute('tabindex', '0');
    h2.textContent = 'Welcome to Lurker Feast';
    h2.style.position = 'relative';
    h2.style.zIndex = '1';

    const p = document.createElement('p');
    p.setAttribute('tabindex', '0');
    p.textContent = 'Lurk The Top Restaurant In Indonesia';
    p.style.position = 'relative';
    p.style.zIndex = '1';

    divElement.appendChild(picture);
    divElement.appendChild(h2);
    divElement.appendChild(p);
    section.appendChild(divElement);

    return section.outerHTML;
  }
};
