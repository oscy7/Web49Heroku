
const user = process.env.USER

require('dotenv').config()


if(process.argv[2] === 
    'web49'){
        console.log('web 49 is the best')
    } else {
        console.log('boooh!')
    }
console.log(`the user is ${user}`)

const express = require('express')
const app = express()

app.get('/hello', (req,res) => {
    res.json({
        message: "hi this works"
    })
})

const port = process.env.PORT || 2000
app.listen(port, () => {
    console.log(`listneing on port ${port}`)
})