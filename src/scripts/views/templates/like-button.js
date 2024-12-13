const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="visit-github">
      Like this resto
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="visit-github">
      Unlike this resto
  </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };