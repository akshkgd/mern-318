const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {type: String, required:true},
    desc: {type:String, required: true},
    img: {type:String, required: true},
    pricing: {type: Number, required: true},
    // status: 0: private, 1: public
    status: {type: Number, default: 0}
})

module.exports = mongoose.model('Products', ProductSchema)