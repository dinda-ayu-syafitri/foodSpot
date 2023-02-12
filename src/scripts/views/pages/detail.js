import UrlParser from '../../routes/url-parser';
import DicodingRestoSrc from '../../data/dicoding_resto_src';
import { createRestoDetailTemplate, createReviewTemplate } from '../templates/template-creator';
import LikeButtonInitator from '../../utils/like-button-presenter.js';

const Detail = {
  async render() {
    return `
          <article class="container">
          <h2>Detail Restoran</h2>
          <div id="resto-detail" class="resto-detail"></div>
          <div class="review-container" id="review-container">
          <h4>Customer Review</h4>
          </div>
          <div id="resto-review">
          <h4>Add Review</h4>
          <div id="addReviewStatus"></div>
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
    ReviewContainer.innerHTML += createReviewTemplate(resto);

    LikeButtonInitator.init({
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
    const addReviewStatus = document.querySelector('#addReviewStatus');

    reviewSubmitBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      if (reviewName.value === '' || reviewText.value === '') {
        // alert('Isi semua input!');
        addReviewStatus.innerHTML = '<span>Isi semua input!</span>';
        reviewName.value = '';
        reviewText.value = '';
      } else {
        const review = {
          id: url.id,
          name: reviewName.value,
          review: reviewText.value,
        };
        const reviewUpdate = await DicodingRestoSrc.addCustomerReview(review);
        reviewName.value = '';
        reviewText.value = '';
        // alert('Review berhasil di post');
        addReviewStatus.innerHTML = '<span>Review berhasil di post!</span>';
        console.log(reviewUpdate);
        ReviewContainer.innerHTML = createReviewTemplate(reviewUpdate);
      }
    });
  },
};

export default Detail;
