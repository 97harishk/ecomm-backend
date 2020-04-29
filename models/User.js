const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	cart:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product1'
	}],
	wishList:[{
			type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
	}],
	address:{
		type: String
	},
	image:{
		type: String,
		default: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'
	}
	
},{
	timeStamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User;