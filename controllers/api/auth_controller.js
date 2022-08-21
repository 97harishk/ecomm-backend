const User = require('../../models/User')
const jwt = require('jsonwebtoken')

module.exports.register =  async function(req, res){
    try {
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.json('202',{
                message: 'User Already exist!'
            })
        }
        if(req.body.password !== req.body.new_password){
            return res.json('202',{
                message: 'Password Does not match!'
            })
        }
        user = await User.create(req.body);
        if(user){
            console.log(user);
            return res.json('200',{
                user: {
                    name: user.name,
                    localId: user._id,
                    image : user.image,
                    token: jwt.sign(user.toJSON(), 'admin', {expiresIn: '100000'})
                },
                message: 'user created!'
            })
        }
            return res.json('202',{
                message:'cant create user!'
            })
    } catch (error) {

       console.log('error in creating user', error)
    }
   
}

module.exports.login = async (req, res) =>{
    try {
        let user = await User.findOne({email: req.body.email});
            if(user){
            if(req.body.password !== user.password)
            return res.status('401').json({
                message: 'Invalid Password!'
            })
            else{
                return res.status('200').json({
                    message: 'Logged In Successfully',
                    name: user.name,
                    localId: user._id,
                    image: user.image,
                    token: jwt.sign(user.toJSON(), 'admin', {expiresIn: '100000'})
            })
         }
        }
        else{
            return res.status('401').json({
                message: 'User Not Found!'
        })
    }
    } catch (error) {
        return res.json('500',{
        message:'Internal Server error'
    })
    }
}


module.exports.autoLogin = async (req, res) =>{
    try {
        let user = await User.findOne({_id: req.params.localId});
            if(user){
                return res.status('200').json({
                    message: 'Logged In Successfully',
                    name: user.name,
                    image: user.image,
                    localId: user._id
            })
        }
    } catch (error) {
        return res.status('500').json({
        message:'Internal Server error'
    })
    }
}
