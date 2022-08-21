const Order = require('../../models/Order')
const orderMailer = require('../../mailer/ordermailer')
module.exports.addOrder = async (req, res) => {
    console.log(req.body);
    try {
        let order = await Order.create(
            {
                userId: req.body.localId,
                totalPrice: req.body.totalPrice,
                status: 'pending'
            })
        let cartItem = req.body.cartItem;
        cartItem.map(item =>{
            order.product.push(item._id);
            order.quantity.push(item.itemQuantity); 
                      
        })
        order.save(); 
        orderMailer.newOrder(order);  
           return res.status('200').json({
            message: 'Order Placed'
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports.orders = async (req, res) =>{
try {
    let orders = await Order.find({userId: req.params.userId})
    .populate({
        path:'userId',
        select: 'name'
    })
    .populate({
        path: 'product'
    })
//    let orders = await Order.aggregate([
//         {
//             $match:{'totalPrice': 16000}
//         },
//         {
//             $group:{'_id': '$userId', 'total':{$sum: '$totalPrice'}}
//         }
         
//     ])
    if(orders){
         return  res.status(200).json({
                 message: 'Your Orders List!',
                 order: orders
             })
    }
} catch (error) {
    
}
}
