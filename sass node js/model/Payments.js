const mongoose = require('mongoose');
const PaymentSchema = new mongoose.Schema({
    email: {type:String, required: true},
    phone: {type:String,},
    id: {type:String, required: true},
    amount: {type:String, required: true},
    status: {type:String, required: true},
    order_id: {type:String, required: true},
    method: {type:String, required: true},
    desc: {type:String, required: true},
    date: {type:String, required: true},
})

module.exports = mongoose.model('payments', PaymentSchema)