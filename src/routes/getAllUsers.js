const { getUsers } = require('../core/users')

module.exports = async (req , res) => {

    getUsers( data => {
        res.status(200).send({message: data})
    })
    
}