const router = require('express').Router();
const auth = require('../../utils/auth')

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes')

router.use('/users', userRoutes);
router.use('/post', postRoutes);

module.exports = router;
