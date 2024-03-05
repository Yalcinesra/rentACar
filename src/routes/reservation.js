"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/passenger:

const permissions = require('../middlewares/permissions')
const reservation = require('../controllers/reservation')

// URL: /reservations

router.route('/')
    .get(permissions.isLogin, reservation.list)
    .post(permissions.isLogin,reservation.create)

router.route('/:id')
    .get(permissions.isLogin, reservation.read)
    .put( permissions.isLogin,reservation.update)
    .patch( permissions.isLogin,reservation.update)
    .delete(permissions.isLogin, reservation.delete)

/* ------------------------------------------------------- */
module.exports = router