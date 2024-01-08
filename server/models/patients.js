const mongoose = require('mongoose')


const patientSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const patientModel = mongoose.model("patients", patientSchema)
module.exports = patientModel