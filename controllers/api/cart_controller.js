const User = require('../../models/User')
const Product1 = require('../../models/Product1')
module.exports.addToCart = async (req, res) =>{
    try {
        console.log(req.params.userId,req.body.productId)
        let user = await User.findById(req.params.userId)
        if(user){
            user.cart.push(req.body.productId)
            user.save();
            return res.status(200).json({
                msg: 'You Product Has Been Added Successfully To Cart!'
            })
        }
        else{
            return res.status(202).json({
                msg: 'User Not Found And Item Can Not Be added TO Cart'
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg: 'internal server error'
        })
        
    }
}
module.exports.removeFromCart = async (req, res) =>{
    try {
        let user = await User.findById(req.params.userId)
        if(user){
            user.cart.pull(req.body.productId)
            user.save();
            // let product = await Product1.findById(req.body.productId)
            return res.status(200).json({
                msg: 'You Product Has Been Removed From Cart!',
                // product: product
            })
        }
        else{
            return res.status(202).json({
                msg: 'User Not Found And Item Can Not Be Removed TO Cart'
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg: 'internal server error'
        })
        
    }
}
module.exports.cartItem = async (req, res) =>{
    try {
        let user = await User.findById(req.params.userId)
        .populate({
            path: 'cart',
            populate: {
                path: 'product1',
                model: 'Product1'
            }
        })
        if(user){
            return res.status(200).json({
                msg: 'Your Cart Items',
                cart: user.cart
            })
        }
        else{
            return res.status(404).json({
                msg: 'Cart not found!'
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg: 'internal server error'
        })
        
    }
}