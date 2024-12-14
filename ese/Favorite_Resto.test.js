const assert = require('assert');

Feature('Favorite Resto');

async function addToFavorite(I) {
  I.amOnPage('/#/');

  I.waitForElement('.card', 15);
  I.seeElement('.card');
  I.click(locate('.card a').first());

  I.waitForElement('#restaurant-detail div h2', 15);
  I.seeElement('#restaurant-detail div h2');
  const restoName = await I.grabTextFrom('#restaurant-detail div h2');

  I.waitForElement('#likeButton', 15);
  I.seeElement('#likeButton');
  const likeButtonText = await I.grabTextFrom('#likeButton');
  assert.equal(likeButtonText.includes('Like this resto'), true);
  I.click('#likeButton');
  const likeButtonTextAfterLike = await I.grabTextFrom('#likeButton');
  assert.equal(likeButtonTextAfterLike.includes('Unlike this resto'), true);
  I.amOnPage('/#/favorite');

  I.waitForElement('.restaurant-card-title a', 10); // Adjust timeout to 10 seconds
  I.seeElement('.restaurant-card-title a');

  const likedRestoName = await I.grabTextFrom('.restaurant-card-title a');
  const cleanRestoName = likedRestoName.trim();
  assert.strictEqual(restoName, cleanRestoName);

}

async function removeFromFavorite(I) {
  I.waitForElement('.card', 15);
  I.seeElement('.card');
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
