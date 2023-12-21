// apiFetcher.js

/**
 * Simulates fetching data from an external API.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise<any>} A Promise that resolves with the fetched data.
 */
async function fetchFromAPI(endpoint) {
    if (!endpoint) {
      throw new Error('Endpoint must be provided.');
    }
  
    // Simulate an asynchronous API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a successful API response
        if (endpoint === 'users') {
          resolve({ users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] });
        } else if (endpoint === 'posts') {
          resolve({ posts: [{ id: 101, title: 'Post 1' }, { id: 102, title: 'Post 2' }] });
        } else {
          // Simulate an API error for unknown endpoint
          reject(new Error('Unknown API endpoint.'));
        }
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  module.exports = fetchFromAPI;
  