const mongoose = require('mongoose');
const menuSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    }
},{
    timeStamps: true
})

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu