const BASE_URL = 'https://api.github.com';
const ENDPOINT = '/users/senssei/repos';

export const helper = (callback, endpoint) => {
  fetch(BASE_URL + endpoint)
    .then((response) =>
      response.json().then(body => callback(body)));
};