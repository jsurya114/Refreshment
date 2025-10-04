const fs=require('fs')
const date = new Date()
let data=date.toString()

fs.writeFile('app.txt',data,(err)=>{
    if(err) return err
    console.log(data)
})
fs.readFile('app.txt','utf8',(err,data)=>{
    if(err) return err
    console.log('this is the data',data)
})