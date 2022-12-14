const router = require('express').Router()
const passport = require('passport')
const userServices = require('./users.services')
const adminValidate = require('../middlewares/role.middleware')
require('../middlewares/auth.middleware')(passport)

router.get('/', userServices.getAllUsers)

router.route('/me')
    .get(passport.authenticate('jwt', { session: false }), userServices.getMyUser)
    .post(passport.authenticate('jwt', { session: false }), userServices.patchMyUser)
    .delete(passport.authenticate('jwt', { session: false }), userServices.deleteMyUser)

router.route('/:id')
    .get(userServices.getUserById)
    .patch(passport.authenticate('jwt', { session: false }), adminValidate, userServices.patchUser)
    .delete(passport.authenticate('jwt', { session: false }), adminValidate, userServices.deleteUser)

module.exports = router