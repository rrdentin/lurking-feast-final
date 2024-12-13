const assert = require('assert');

Feature('Favorite Resto');

Scenario('Add one restaurant to favorite', async ({ I }) => {
  I.amOnPage('/#/');

  I.waitForElement('.card', 15);
  I.seeElement('.card');
  I.click(locate('.card a').first());

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  const likeButtonText = await I.grabTextFrom('#likeButton');
  assert.equal(likeButtonText.includes('Like this resto'), true);
  I.click('#likeButton');
  const likeButtonTextAfterLike = await I.grabTextFrom('#likeButton');
  assert.equal(likeButtonTextAfterLike.includes('Unlike this resto'), true);
});

