class User {
  constructor(username, password, date) {
    this.username = username;
    this.password = password;
    this.date = date;
  }
}

const users = [];

const addUser = (username, password, date) => {
  const user = new User(username, password, date);
  users.push(user);
  return user;
}

const getUser = (username) => {
  return users.find(user => user.username === username);
}

module.exports = {
  addUser,
  getUser,
}