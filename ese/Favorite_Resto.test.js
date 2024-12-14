const assert = require('assert');

Feature('Favorite Resto');

async function addToFavorite(I) {
  I.amOnPage('/#/');

  I.waitForElement('.card', 15);
  I.seeElement('.card');
  I.click(locate('.card a').first());

  I.waitForElement('#likeButton', 15);
  I.seeElement('#likeButton');
  const likeButtonText = await I.grabTextFrom('#likeButton');
  assert.equal(likeButtonText.includes('Like this resto'), true);
  I.click('#likeButton');
  const likeButtonTextAfterLike = await I.grabTextFrom('#likeButton');
  assert.equal(likeButtonTextAfterLike.includes('Unlike this resto'), true);
  I.amOnPage('/#/favorite');

  I.waitForElement('.card', 15);
  I.seeElement('.card');
}

async function removeFromFavorite(I) {
  I.click(locate('.card a').first());

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  const likeButtonText = await I.grabTextFrom('#likeButton');
  assert.equal(likeButtonText.includes('Unlike this resto'), true);
  I.click('#likeButton');
  const likeButtonTextAfterUnlike = await I.grabTextFrom('#likeButton');
  assert.equal(likeButtonTextAfterUnlike.includes('Like this resto'), true);

  I.amOnPage('/#/favorite');
  I.waitForElement('.lists', 5);
  I.seeElement('.lists');
  const noFav = await I.grabTextFrom('.lists');
  assert.equal(noFav.includes('No Favorite Resto'), true);
}

Scenario(
  "Showing 'No Favorite Resto'",
  ({ I }) => {
    I.amOnPage('/#/favorite');
    I.waitForElement('.lists', 5);
    I.seeElement('.lists');
    I.see('No Favorite Resto');
  }
);

Scenario('Add one restaurant to favorites', async ({ I }) => {
  await addToFavorite(I);
});

Scenario('Remove restaurant from favorites', async ({ I }) => {
  await addToFavorite(I);
  await removeFromFavorite(I);
});
