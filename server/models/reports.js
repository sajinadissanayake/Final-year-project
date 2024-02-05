const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    nic: String,
    
    patientReport:String,
})

const reportsModel = mongoose.model("reports", reportSchema)
module.exports = reportsModel
