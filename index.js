
const user = process.env.USER

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

app.listen(2000, () => {
    console.log('listening on port 2000')
})