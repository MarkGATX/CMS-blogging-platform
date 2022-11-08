const { Users } = require('../models');
const { Post } = require('../models');
const { Comment } = require('../models');

const postdata = [
  {
    id: 1,
    title: 'WOW!',
    post: `I can't believe we've learned all of this in just 2 months. My brain hurts from all the information `,
    author: 1,
    date_created: 'June 21, 2022 17:00:00',
  },
  {
    id:2,
    title: 'Too many...',
    post: `There are so many folders I don't know what to do with myself `,
    author: 1,
    date_created: 'June 23, 2022 17:00:00',
  },
  {
    id: 3,
    title: 'I prefer vanilla',
    post: `Bootstrap makes some things easier but I still prefer doing it on my own a lot of times`,
    author: 2,
    date_created: 'June 26, 2022 17:00:00',
  },
  {
    id:4,
    title: 'Reacting to REACT',
    post: `What have we done?? REACT is coming up next and that will change our world. And I just got the hang of SQL. Actually no I didn't. Bring on REACT!`,
    author: 1,
    date_created: 'July 10, 2022 17:00:00',
  },
  {
    id:5,
    title: 'Wait, I should apply now?!',
    post: `They say we should go ahead and apply for dev jobs now. I've only been doing this two months! Am I really ready?`,
    author: 3,
    date_created: 'July 12, 2022 17:00:00',
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;