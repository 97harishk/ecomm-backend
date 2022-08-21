const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    menuId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
        required: true
    },
    name:{
        type: String,
        requied: true
    }
},{
    timestamps: true
});

const Category  = mongoose.model('Category', categorySchema)
module.exports = Category;