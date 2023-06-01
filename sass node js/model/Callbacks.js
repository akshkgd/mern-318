const mongoose = require('mongoose');
const CallbackSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type:String, required: true,},
    phone: {type:Number, required:true},
    date: {type: Date, required: true},
    status: {type: Number, default :0},
    remarks: {type: String}
})

module.exports = mongoose.model('Callbacks', CallbackSchema)