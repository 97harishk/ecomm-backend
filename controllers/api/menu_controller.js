const Menu = require('../../models/Menu')

module.exports.menu = async (req, res) =>{
    try {
        let menu = await Menu.find({});
        if(menu){
            return(
                res.status(200).json({
                    message: 'Menu List!',
                    menu: menu
                })
            )
        }
        return(
            res.status(202).json({
                message: 'Menu Can Not Created!'
            })
        )
    } catch (error) {
        return(
            res.status(500).json({
                message: 'Internal Server Error!'
            })
        )
    }
}
module.exports.create = async (req, res) => {
    try {
        let menu = await Menu.create(req.body);
        if(menu){
            return(
                res.json(200, {
                    message: 'Menu Created',
                    menu: menu
                })
            )
        } 
        return(
            res.json(404, {
                message: 'cant create menu'
            })
        )
    } catch (error) {
        return(
            res.json(404, {
                message: 'Error in creating menu',
                error: error
            })
        )}
    }