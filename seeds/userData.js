const { Users } = require('../models');
const { Post } = require('../models');
const { Comment } = require('../models');

const userdata = [
  {
    id: 1,
    first_name: "River",
    last_name: "Tam",
    user_name: 'Reaver',
    password: 'serenitynow',
  },
  {
    id: 2,
    first_name: "Steve",
    last_name: "Rogers",
    user_name: 'OYL',
    password: 'dothisallday',
  },
  {
    id: 3,
    first_name: "N.K.",
    last_name: "Jemison",
    user_name: 'Essun',
    password: 'stillness',
  },
  
];

const seedUsers = () => Users.bulkCreate(userdata);

module.exports = seedUsers;