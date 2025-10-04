const { error } = require('console')
const express = require('express')
const app = express()
const fs = require('fs')


app.get('/product/:id',(req,res)=>{
    let id = req.params.id
    res.send(`this is the id:${id}`)
})

app.get('/name',(req,res)=>{
    let a = req.query.a
    let b=req.query.b
    let sum=parseInt(a)+parseInt(b)
    res.send(`sum is ${sum}`)

   
})

let sum=10+30
 fs.writeFile('index.txt',sum,(err)=>{
        if(err) {
            console.log(err)
        }
        console.log(sum)
    })




app.listen(3000,()=>{
    console.log('server is running localhost:3000')
})