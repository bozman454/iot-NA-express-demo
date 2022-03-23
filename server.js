const express = require('express');
require('dotenv').config()

const getAllUsers = require('./src/routes/getAllUsers')
const app = express();

app.get('/api/v1/helloworld/:id', (request, response) =>{
    let out = request.params
    response.status(200).send({message: out})
})

app.get('/api/v1/helloworld/?pageNo=1&pageQnt=100', (req, res)=>{
    let out = req.query
    res.status(200).send({message: out.word})
})

app.get('/api/v1/users/', getAllUsers)

app.listen(process.env.PORT, () => console.log(`server has started ${process.env.PORT}`))