"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/Car:

const permissions = require('../middlewares/permissions')
const Car = require('../controllers/car')

// URL: /Cars

router.route('/')
    .get(Car.list)
    .post(permissions.isStaffOrisAdmin, Car.create)

router.route('/:id')
    .get( Car.read)
    .put( permissions.isStaffOrisAdmin,Car.update)
    .patch( permissions.isStaffOrisAdmin,Car.update)
    .delete(permissions.isStaffOrisAdmin, Car.delete)

/* ------------------------------------------------------- */
module.exports = router