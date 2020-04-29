const Product = require('../../models/Product1')
module.exports.create =   async (req, res) =>{
    try {
       console.log(req.body)
        let product = await Product.create(req.body);
        if(product){
            return res.status('200').json({
                product: product,
                message: 'Product Created!'
            })
        }
        else{
           return res.status('202').json({
               message: 'Product Can Not Created!'
           })
        }
        //   Product.uploadedAvatar(req, res,async function(err){
        //     let  obj = {
        //         ...req.body,
        //         image: Product.avatarPath +'/' + req.file.filename
        //       }
        //     let product = await Product.create(obj);
        //     if(product){
        //         return res.status('200').json({
        //             product: product,
        //             message: 'Product Created!'
        //         })
        //     }
        //     else{
        //        return res.status('202').json({
        //            message: 'Product Can Not Created!'
        //        })
        //     }
        //   })
          
    } catch (error) {
        console.log(error);
        return res.status('500').json({
            message: 'Internal Server Error!'
        })
    }
}

module.exports.products = async function(req, res){
    try {
        let product = await Product.find({})
        if(product){
            return res.status(200).json({
                product: product,
                message: 'Product Lsts!'
            })
        }
        else{
           return res.status(202).json({
               message: 'Product Not Found!'
           })
        }
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}

module.exports.productByID = async function(req, res){
    try {
        let product = await Product.find({_id: req.params.id})
        if(product){
            return res.status(200).json({
                product: product,
                message: 'Product Found!'
            })
        }
        else{
           return res.status(202).json({
               message: 'Product Not Found!'
           })
        }
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }

}