export const Restaurants = {
  async getRestaurants() {
    try {
      const response = await fetch('/data/GithubRestAPI.js');
      const data = await response.json();

      return data.restaurants;
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
      return [];
    }
  },

  async getTopRestaurantsByRating() {
    try {
      const response = await fetch('/data/GithubRestAPI.js');
      const data = await response.json();
      const sortedRestaurants = data.restaurants.sort(
        (a, b) => b.rating - a.rating,
      );

      return sortedRestaurants;
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
      return [];
    }
  },
};
