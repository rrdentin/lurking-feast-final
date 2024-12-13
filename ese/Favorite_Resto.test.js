const assert = require('assert');

Feature('Favorite Resto');

Scenario(
  "Showing 'No Favorite Resto'",
  ({ I }) => {
    I.amOnPage('/#/favorite');
    I.waitForElement('.lists', 5);
    I.seeElement('.lists');
    I.see('No Favorite Resto');
  }
);

Scenario('Add one restaurant to fav then delete', async ({ I }) => {
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
  I.amOnPage('/#/favorite');
  I.waitForElement('.card', 15);
  I.seeElement('.card');
  I.click(locate('.card a').first());
  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  const likeButtonTextAfter = await I.grabTextFrom('#likeButton');
  assert.equal(likeButtonTextAfter.includes('Unlike this resto'), true);
  I.click('#likeButton');
  const likeButtonTextAfterLikeAfter = await I.grabTextFrom('#likeButton');
  assert.equal(likeButtonTextAfterLikeAfter.includes('Like this resto'), true);
  I.amOnPage('/#/favorite');
  I.waitForElement('.lists', 5);
  I.seeElement('.lists');
  const noFav = await I.grabTextFrom('.lists');
  assert.equal(noFav.includes('No Favorite Resto'), true);
});
