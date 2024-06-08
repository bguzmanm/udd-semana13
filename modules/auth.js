const { getUser } = require('./user');

const authenticate = (username, password) => {
  const user = getUser(username);
  if (user && user.password === password) {
    return true;
  }
  return false;
}

module.exports = {
  authenticate
}