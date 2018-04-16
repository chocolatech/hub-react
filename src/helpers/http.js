const BASE_URL = 'https://api.github.com';
const ENDPOINT = '/users/senssei/repos';

export const helper = (callback) => {
  fetch(BASE_URL + ENDPOINT)
    .then((response) =>
      response.json().then(body => callback(body)));
};