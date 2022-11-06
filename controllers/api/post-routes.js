const router = require('express').Router();
const { Users, Post } = require('../../models');
const auth = require('../../utils/auth')

router.post('/', async (req, res) => {})
    
    // try {
    //     const dbBlogData = await Post.findAll({
    //         include: {
    //             model: Users,
    //             attributes: [
    //                 'first_name',
    //                 'last_name',
    //             ],
    //         },
    //     });
//         const dbUserData = await Users.findOne({
//             where: {
//                 email: req.body.email,
//             },
//         });
//         console.log(dbUserData)
//         if (!dbUserData) {
//             res.status(400)
//                 .json({ message: 'Incorrect email or password. Please try again!' });
//             return;
//         }

//         const validPassword = await dbUserData.checkPassword(req.body.password);

//         if (!validPassword) {
//             res
//                 .status(400)
//                 .json({ message: 'Incorrect email or password. Please try again!' });
//             return;
//         }

//         req.session.save(() => {
//             req.session.loggedIn = true;

//             res.status(200)
//                 .json({ user: dbUserData, message: 'You are now logged in!' });
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;