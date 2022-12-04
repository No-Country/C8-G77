const router = require('express').Router()
const passport = require('passport')
const cartServices = require('./cart.services')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(passport.authenticate('jwt', { session: false }), cartServices.getCart)
    .post(passport.authenticate('jwt', { session: false }), cartServices.postCart)
    .delete(passport.authenticate('jwt', { session: false }), cartServices.deleteAllProducts)

router.route('/:id')
    .delete(passport.authenticate('jwt', { session: false }), cartServices.deleteProduct)

module.exports = router