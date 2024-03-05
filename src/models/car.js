"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "plateNumber": "34ABC123",
    "brand": "Ford",
    "model": "Focus",
    "year": 2020,
    "isAutomatic": true,
    "pricePerDay": 249.99
    "isPublish":true,
}
{
    "plateNumber": "34ABC234",
    "brand": "Renault",
    "model": "Megane",
    "year": 2022,
    "isAutomatic": false,
    "pricePerDay": 199.99
    "isPublish":true,
}
{
    "plateNumber": "34ABC345",
    "brand": "Opel",
    "model": "Astra",
    "year": 2021,
    "isAutomatic": false,
    "pricePerDay": 189.99,
    "isPublish": false
    
}
/* ------------------------------------------------------- */
// Car Model:


// const passwordEncrypt = require('../helpers/passwordEncrypt')

const CarSchema = new mongoose.Schema({

    plateNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    brand: {
        type: String, 
        trim: true,
        required: true,
    },
    model: {
        type: String, 
        trim: true,
        required: true,
    },
    year: {
        type: Number, 
        required: true,
    },
    isAutomatic: {
        type: Boolean, 
        required: true,
    },
    isPublish: {
        type: Boolean, 
        required: true,
    },
    pricePerDay:{
        type: Number, 
        required: true,
    },
    createdId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref : 'User',
        trim: true,
        required: true,
    }

}, { collection: 'cars', timestamps: true })
/* ------------------------------------------------------- 
// mongoose middleware
// https://mongoosejs.com/docs/middleware.html

// https://www.w3schools.com/jsref/jsref_tolocalestring.asp
const dateToLocaleString= require('../helpers/dateToLocaleString')
// pre ,init, pre save, post save ...

//? Veriyi çıktı vermeden hemen önce manipulasyon:
CarSchema.pre('init', function(document){

    // document.extra = "deneme"
    // document.departureDateStr = document.departureDate.toLocaleString('tr-tr',{dataStyle:'full',timeStyle:'medium'})
    document.departureDateStr = dateToLocaleString(document.departureDate)
    document.arrivalDateStr = dateToLocaleString(document.arrivalDate)
    document.__v = undefined // görünümden kaldırır
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('Car', CarSchema)