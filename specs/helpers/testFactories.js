import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter.js';
 
const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    resto,
  });
};
 
export { createLikeButtonPresenterWithResto };