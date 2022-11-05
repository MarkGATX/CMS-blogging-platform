const router = require('express').Router();
const { Post, Users, Comment } = require('../models');
// TODO: Import the custom middleware
const auth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const dbBlogData = await Post.findAll({
            include: {
                model: Users,
                attributes: [
                    'first_name',
                    'last_name',
                ],
            },
        });
        console.log(dbBlogData)
        const blogPosts = dbBlogData.map((blogs) =>
            blogs.get({ plain: true })
        );
        console.log(blogPosts)

        res.status(200).
            render('home', {
                blogPosts,
                loggedIn: req.session.loggedIn,
            });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const dbBlogData = await Post.findByPk(req.params.id, 
            {
            include: 
                {
                    all: true,
                    nested:true
                } 
        });    
        console.log(dbBlogData)
        const blogPosts = dbBlogData.get({ plain: true });
        res.status(200).
        render('full_blog', {
                blogPosts,
                loggedIn: req.session.loggedIn,
            });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;