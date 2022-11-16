const fs = require('fs/promises')
const express = require('express')


const app = express();
app.get('/api', (req, res)=>{
    res.send('This API is working on Domain Name...')
})
app.listen(3000, ()=>console.log('Server Running on Sam Portfolio Site'))