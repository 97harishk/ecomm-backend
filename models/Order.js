const mongoose  = require('mongoose')

const OrderSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product1'
    }],
    quantity:[{
        type: Number
    }],
    totalPrice: {
        type: Number,
        require: true
    },
    status:{
        type: String,
        require: true
    }
},{
    timeStamps: true
})

let Order = mongoose.model('Order' ,OrderSchema)

module.exports = Order;