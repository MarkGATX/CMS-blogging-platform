const { Users } = require('../models');
const { Post } = require('../models');
const { Comment } = require('../models');

const commentdata = [
    {
        id:1,
        comment: `Is this what an stroke feels like? `,
        comment_author_id: 2,
        date_created: 'June 21, 2022 18:00:00',
        blog_id: 1,
    },
    {
        id:2,
        comment: `I feel seen. `,
        comment_author_id: 3,
        date_created: 'June 24, 2022 18:00:00',
        blog_id: 2,
    },
    {
        id:3,
        comment: `What do we do? `,
        comment_author_id: 2,
        date_created: 'June 27, 2022 18:00:00',
        blog_id: 2,
    },
    {
        id:4,
        comment: `But doesn't it make initial layout easier?`,
        comment_author_id: 2,
        date_created: 'June 28, 2022 18:00:00',
        blog_id: 3,
    },
    {
        id:5,
        comment: `Not for me. I prefer the control.`,
        comment_author_id: 3,
        date_created: 'June 28, 2022 19:00:00',
        blog_id: 3,
    },
    {
        id:6,
        comment: `I'm still working on APIs!`,
        comment_author_id: 2,
        date_created: 'July 11, 2022 18:00:00',
        blog_id: 4,

    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;