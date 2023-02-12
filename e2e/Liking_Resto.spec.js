Feature('Liking Resto');

Before(({ I }) => {
    I.amOnPage('/#/favourite');
  });

  Scenario('showing empty liked resto', ({ I }) => {
    I.seeElement('#query');
    I.waitForElement;
    I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
  });
