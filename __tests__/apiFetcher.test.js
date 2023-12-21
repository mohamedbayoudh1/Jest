// apiFetcher.test.js
const fetchFromAPI = require('../apiFetcher');

test('Fetch users from the API', async () => {
  const result = await fetchFromAPI('users');
  expect(result).toEqual({ users: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] });
});

test('Fetch posts from the API', async () => {
  const result = await fetchFromAPI('posts');
  expect(result).toEqual({ posts: [{ id: 101, title: 'Post 1' }, { id: 102, title: 'Post 2' }] });
});

test('Throw an error for unknown API endpoint', async () => {
  await expect(fetchFromAPI('unknown')).rejects.toThrowError('Unknown API endpoint.');
});

test('Throw an error when endpoint is not provided', async () => {
  await expect(fetchFromAPI()).rejects.toThrowError('Endpoint must be provided.');
});
