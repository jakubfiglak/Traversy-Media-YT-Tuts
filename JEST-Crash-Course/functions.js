const axios = require('axios');

const functions = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = {
      firstName: 'Jakub',
      lastName: 'Figlak',
    };
    return user;
  },
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error'),
};

module.exports = functions;
