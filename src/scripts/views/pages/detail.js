import UrlParser from '../../routes/url-parser';
import DicodingRestoSrc from '../../data/dicoding_resto_src';
import { createRestoDetailTemplate, createReviewTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
          <article class="container">
          <h2>Detail Restoran</h2>
          <div id="resto-detail" class="resto-detail"></div>
          <h4>Customer Review</h3>
          <div class="review-container" id="review-container">
</div>
          <div id="resto-review">
<form action="">
  <div class="form-review-name">
    <label for="nameReview">Nama</label>
    <input type="text" name="nameReview" id="nameReview" />
  </div>

  <div class="form-review-text">
    <label for="textReview">Review</label>
    <textarea name="textReview" id="textReview"></textarea>
  </div>

  <button type="submit" id="submitBtn">Submit</button>
</form>
          </div>
          <div id="likeButtonContainer"></div>
        </article>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DicodingRestoSrc.detailResto(url.id);
    const DetailContainer = document.querySelector('#resto-detail');
    const ReviewContainer = document.querySelector('#review-container');
    DetailContainer.innerHTML = createRestoDetailTemplate(resto);
    ReviewContainer.innerHTML = createReviewTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        rating: resto.rating,
        pictureId: resto.pictureId,
        description: resto.description,
      },
    });

    const reviewSubmitBtn = document.querySelector('#submitBtn');
    const reviewName = document.querySelector('#nameReview');
    const reviewText = document.querySelector('#textReview');

    reviewSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (reviewName.value === '' || reviewText.value === '') {
        alert('Isi semua input!');
        reviewName.value = '';
        reviewText.value = '';
      } else {
        const review = {
          id: url.id,
          name: reviewName.value,
          review: reviewText.value,
        };
        DicodingRestoSrc.addCustomerReview(review);
        reviewName.value = '';
        reviewText.value = '';
        alert('Review berhasil di post');
        setTimeout(() => {
          location.reload(true);
        }, 1);
      }
      ReviewContainer.innerHTML = createReviewTemplate(resto);
    });
  },
};

export default Detail;
