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
                    'username',
                ],
            },
        });
        console.log(dbBlogData)
        const blogPosts = dbBlogData.map((blogs) =>
            blogs.get({ plain: true })
        );
        

        res.status(200).
            render('home', {
                blogPosts,
                loggedIn: req.session.loggedIn,
                userName: req.session.userId
            });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', auth.withAuth, async (req, res) => {
    

    try {
        const dbBlogData = await Post.findAll({
            include: {
                model: Users,
                where: {
                    id: req.session.userId,
                }
            }
        });
        console.log(dbBlogData)
        const blogPosts = dbBlogData.map((blogs) =>
            blogs.get({ plain: true })
        );
        console.log(blogPosts)

        res.status(200).
            render('dashboard', {
                blogPosts,
                loggedIn: req.session.loggedIn,
                userId: req.session.userId
            });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post/:id', auth.withAuth, async (req, res) => {
    try {
        const dbBlogData = await Post.findByPk(req.params.id,
            {
                include: [
                    {
                        model: Users,
                        attributes: [
                            'first_name',
                            'last_name',
                            'username',
                        ]
                    },
                    {
                        model: Comment,
                        include: [
                            {
                                model: Users,
                                attributes: [
                                    'first_name',
                                    'last_name',
                                    'username',
                                ]
                            }
                        ]
                    }
                ]

                // {
                //     all: true,
                //     nested:true
                // } 
            });
        console.log(dbBlogData)
        console.log('sessionid = ' + req.session.userId)
        const blogPosts = dbBlogData.get({ plain: true });
        res.status(200).
            render('full_blog', {
                blogPosts,
                loggedIn: req.session.loggedIn,
                userId: req.session.userId,
                postId: req.params.id
            });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//Edit Post
router.get('/compose/:id', auth.withAuth, async (req, res) => {
    try {
        const dbBlogData = await Post.findByPk(req.params.id, {
            include: {
                model: Users,
                attributes: [
                    'first_name',
                    'last_name',
                    'username',
                ],
            }
        }
        );
            
                console.log(dbBlogData)
        const blogPosts = dbBlogData.get({ plain: true });
        console.log(blogPosts)
        res.status(200).
            render('compose', {
                blogPosts,
                loggedIn: req.session.loggedIn,
                title: blogPosts.title,

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