import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
        <div class="resto-main-info">
          <img
            src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
            alt="${resto.name}"
            class="card-img"
          />
          <div class="main-info-text">
                    <h3>${resto.name}</h3>
          <span>${resto.city}</span><br>
          <span>${resto.address}</span>
          </div>
        </div>
        <div class="resto-full-info">
          <h4>Description</h3>
          <p>
          ${resto.description}
          </p>

          <div class = menu-makanan>
          <h4>Menu Makanan</h4>
          <ul>
          ${resto.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
          </ul>
          </div>

          <div class = menu-minuman>
          <h4>Menu Minuman</h4>
          <ul>
          ${resto.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
          </ul>
          </div>
`;

const createRestoItemTemplate = (resto) => `
<section class='resto-item'>
<img class="lazyload card-img" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="Foto ${resto.name}"/>
<h3 class='resto__title'><a href='/#/detail/${resto.id}'>${resto.name || '-'}</a></h3>
<i class="fa-solid fa-location-dot"></i><span>${resto.city}</span><br />
<i class="fa-solid fa-star"></i><span>${resto.rating}</span>
<p class="resto-desc">${resto.description}</p>
</section>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewTemplate = (resto) => `
${resto.customerReviews
    .map((review) => `
      <div class="review">
      <img src="/images/person-circle.png" alt="" />
      <div class="review-content">
      <h5>${review.name}</h5>
      <span>${review.date}</span>
      <p>${review.review}</p>
      </div>
      </div>
      <hr>
    </div>
`)
    .join(' ')}

`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createReviewTemplate,
};
