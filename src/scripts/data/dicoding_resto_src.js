import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestoSrc {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.RESTO_DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson.restaurant);
    return responseJson.restaurant;
  }

  static async addCustomerReview(review) {
    const response = await fetch(API_ENDPOINT.RESTO_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  }
}

export default DicodingRestoSrc;
