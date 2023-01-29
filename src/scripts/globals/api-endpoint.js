import CONFIG from './config';

const API_ENDPOINT = {
  RESTO_LIST: `${CONFIG.BASE_URL}/list`,
  RESTO_DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  RESTO_REVIEW: `${CONFIG.BASE_URL}/review`,
};

export default API_ENDPOINT;
