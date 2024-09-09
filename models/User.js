const mongoose = require("mongoose")

const ReportsSchema = new mongoose.Schema({
    report:{type:String,required:true},
})
module.exports = mongoose.model("reports",ReportsSchema)