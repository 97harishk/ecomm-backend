const Category  = require('../../models/Category')
module.exports.create = async (req, res) =>{
    try {
        let category = await Category.findOne({name: req.body.name})
        if(category){
            return res.status('202').json({
                message: `${req.body.name} Category Already Exist!`
            })
        }
        let catObj = {
            menuId: req.body.menuId,
            name: req.body.name
        }
        category = await Category.create(catObj)
        if(category){
            return res.status('200').json({
                category: category,
                message:`${category.name} Category Created!`
            })
        }
        else{
            return res.status('202').json({
                message:'Category cant be created!'
            })
        }
        } catch (error) {
        return res.status('500').json({
            message: 'Internal server error!'
        })
    }
}

module.exports.delete = async (req, res) =>{
    try {
        let category = await Category.findByIdAndDelete(req.params.id);
        if(category){
            return res.status('200').json({
                message: `${category.name} Is Deleted`
            })
        }else{
            return res.status('202').json({
                message: 'Can not delete category'
            })
        }
    } catch (error) {
        return res.status('500').json({
            message: 'Internal Server Error'
        })
    }
}

module.exports.category = async (req, res) =>{
    try {
        let category = await Category.find();
        if(category){
            return res.status('200').json({
                category: category,
                message: `Category List Fetched From Database`
            })
        }else{
            return res.status('202').json({
                message: 'Category Not Found'
            })
        }
    } catch (error) {
        return res.status('500').json({
            message: 'Internal Server Error'
        })
    }
}