const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
    I.amOnPage('/#/favourite');
  });
   
  Scenario('showing empty liked resto', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
  });

  Scenario('liking one resto', async ({ I }) => {
    I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
   
    I.amOnPage('/');
   
    I.seeElement('.resto__title a');

    const firstResto = locate('.resto__title a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);
   
    I.seeElement('#likeButton');
    I.click('#likeButton');
   
    I.amOnPage('/#/favourite');
    I.seeElement('.resto-item');
    const likedRestoName = await I.grabTextFrom('.resto__title a');
  assert.strictEqual(firstRestoName, likedRestoName);
  });

  Scenario('unliking one resto', async ({ I }) => {
    I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
   
    I.amOnPage('/');
   
    I.seeElement('.resto__title a');

    const firstResto = locate('.resto__title a').first();
    I.click(firstResto);
   
    I.seeElement('#likeButton');
    I.click('#likeButton');
   
    I.amOnPage('/#/favourite');
    I.seeElement('.resto-item');

    const firstLikedResto = locate('.resto__title a').first();
    // const firstLikedRestoName = await I.grabTextFrom(firstLikedResto);
    I.click(firstLikedResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favourite');
    I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');

  });

  Scenario('searching resto', async ({I}) => {
    I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
  
    I.amOnPage('/');
  
    I.seeElement('.resto__title a');
  
    const names = [];
  
    for (let i = 1; i <= 3; i++) {
      I.click(locate('.resto__title a').at(i));
      I.seeElement('#likeButton');
      I.click('#likeButton');
      names.push(await I.grabTextFrom('.main-info-text h3'));
      I.amOnPage('/');
    }
  
    I.amOnPage('/#/favourite');
    I.seeElement('#query');
  
    const searchQuery = names[1].substring(1, 3);
    const matchingResto = names.filter((name) => name.indexOf(searchQuery) !== -1);
  
    I.fillField('#query', searchQuery);
    I.pressKey('Enter');
  
    const visibleLikedResto = await I.grabNumberOfVisibleElements('.resto-item');
    assert.strictEqual(matchingResto.length, visibleLikedResto);
  
    matchingResto.forEach(async (name, index) => {
      const visibleName = await I.grabTextFrom(locate('.resto__title').at(index + 1));
      assert.strictEqual(name, visibleName);
    });
  });