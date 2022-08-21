const mongoose = require('mongoose')

const product1Schema = new mongoose.Schema({
    title:{
		type: String,
		required : true
	},
	category:{
		type: String,
		required: true
	},
	images:[{
		type: String
	}],
	brand:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	cpu:{
		type: String,
		required: true
	},
	camera:{
		type: String,
		required: true
	},
	size:{
		type: String,
		required: true
	},
	weight:{
		type: String,
		required: true
	},
	display:{
		type: String,
		required: true
	},
	battery:{
		type: String,
		required: true
	},
	memory:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
})

const Product1 = mongoose.model('Product1', product1Schema)
module.exports = Product1;