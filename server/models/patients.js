const mongoose = require('mongoose')


const patientSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    dob: Date,
    address: String,
    pnumber: Number,
    moh:String,
})

const patientModel = mongoose.model("patients", patientSchema)
module.exports = patientModel