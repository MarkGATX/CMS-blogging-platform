const Users = require('./Users');
const Post = require('./Post')
const Comment = require('./Comment');


Users.hasMany(Comment, {
    foreignKey: 'comment_author_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Users, {
    foreignKey: 'comment_author_id'
});

Users.hasMany(Post, {
    foreignKey: 'author',
    onDelete: 'CASCADE'
});

Post.belongsTo(Users, {
    foreignKey: 'author'
});

Post.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
    foreignKey: 'blog_id'
})

module.exports = { Users, Comment, Post };