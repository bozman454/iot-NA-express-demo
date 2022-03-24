require('dotenv').config()
const { Client } = require('pg')
const { TABLE_NAME } = require('../constants/constants')
const options = {
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}
const client = new Client(options)

function getUsers(cb) {

    client.connect()
    client.query("SELECT * from users", (err, res) => {
        if (err) throw err;
        cb(res.rows)
    })
}
async function getUsersAsync() {
    try {

        client.connect()
        const data = await client.query(`SELECT * FROM ${TABLE_NAME.users}`)
        client.end()
        return data.rows
    }
    catch (err) {
        throw err
    }

}

module.exports = {
    getUsers,
    getUsersAsync
}