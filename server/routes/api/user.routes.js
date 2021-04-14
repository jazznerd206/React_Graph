const router = require('express').Router();
const user = require('../../controllers/user.controller.js');

    router.route('/')
        .get(user.findAll)
        .post(user.create, (req, res) => {
            console.log('user post route'), req.body;
        });
    router.route('/:userId')
        .get(user.findById)
        .put(user.update)
        .delete(user.remove, (req, res) => {
            console.log('delete user route');
        });

module.exports = router;