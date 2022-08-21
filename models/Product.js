const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const IMAGE_PATH  = path.join('/uploads/images');
const productSchema = new mongoose.Schema({
	menu:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Menu'
		},
	category:{
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Category'
	},
	name:{
		type: String,
		required : true
	},
	price:{
		type: Number,
		required: true
	},
	discount:{
		type: String,
		required: true
	},
	totalQuantity:{
		type: String,
		required: true
	},
	image:{
		type: String
	},
	description:{
		type: String,
		required: true
	}
},
{
	timestamps: true
})
let storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, path.join('__dirname', '..',IMAGE_PATH) );
	},
	filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
})
productSchema.statics.uploadedAvatar = multer({storage:  storage}).single('image');
productSchema.statics.avatarPath = IMAGE_PATH;

let Product = mongoose.model('Product', productSchema);
 module.exports = Product;