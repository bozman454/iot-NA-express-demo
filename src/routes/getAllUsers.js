const { getUsers, getUsersAsync } = require('../core/users')

module.exports = async (req , res) => {

    // getUsers( data => {
    //     res.status(200).send({message: data})
    // })
    const users = await getUsersAsync()
    console.log(users)
    res.status(200).send({message: users})
}