const { Users } = require('../models');
const { Post } = require('../models');
const { Comment } = require('../models');

const userdata = [
  {
    id: 1,
    first_name: "River",
    last_name: "Tam",
    username: 'Reaver',
    email: 'captain@tightpants.com',
    password: 'serenitynow',
  },
  {
    id: 2,
    first_name: "Steve",
    last_name: "Rogers",
    username: 'OYL',
    email: 'carter@avengers.org',
    password: 'dothisallday',
  },
  {
    id: 3,
    first_name: "N.K.",
    last_name: "Jemison",
    username: 'Essun',
    email:'city@webecame.com',
    password: 'stillness',
  },
  
];

const seedUsers = () => Users.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;