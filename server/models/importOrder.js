const mongoose = require('mongoose')

const importOrderSchema = new mongoose.Schema({
    name: String,
    phonenumber: String,
    email: String,
    make: String,
    model: String,
    year: String,
    specs: String,
    extra: String,
    date: Date,
})

module.exports = mongoose.model("importOrder", importOrderSchema, "importorders")