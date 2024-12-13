const BASE_URL = 'https://restaurant-api.dicoding.dev';
const CLIENT_SECRET = '';

const API_ENDPOINT = {
  GET_RESTO_LIST: () => `${BASE_URL}/list`,
  GET_RESTO_BY_ID: (id) => `${BASE_URL}/detail/${id}`,
  GET_IMAGE: (size, pictureId) => `${BASE_URL}/images/${size}/${pictureId}`,
};

export const RestoRestAPI = {
  getRestoList: async () => {
    try {
      const response = await fetch(API_ENDPOINT.GET_RESTO_LIST(), {
        headers: {
          Authorization: CLIENT_SECRET ? `Bearer ${CLIENT_SECRET}` : undefined,
        },
      });
      if (!response.ok) throw new Error(`Error fetching restaurant list: ${response.statusText}`);
      const data = await response.json();
      return data.restaurants;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getRestoById: async (id) => {
    try {
      const response = await fetch(API_ENDPOINT.GET_RESTO_BY_ID(id), {
        headers: {
          Authorization: CLIENT_SECRET ? `Bearer ${CLIENT_SECRET}` : undefined,
        },
      });
      if (!response.ok) throw new Error(`Error fetching restaurant details: ${response.statusText}`);
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error(`Error fetching restaurant with ID ${id}:`, error);
      throw error;
    }
  },

  getImageUrl: (pictureId, size = 'medium') => {
    if (!['small', 'medium', 'large'].includes(size)) {
      throw new Error('Invalid image size. Use "small", "medium", or "large".');
    }
    return API_ENDPOINT.GET_IMAGE(size, pictureId);
  },
};
