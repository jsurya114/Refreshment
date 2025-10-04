const fs = require('fs')
// let writeStream=fs.createWriteStream('data.txt')
// writeStream.write('this is jayasurya')
// writeStream.write('i am from kottayam')
// writeStream.end('i am a body builder')

let readStream=fs.createReadStream('data.txt','utf8')
readStream.on('data',chunk=>{
    console.log(chunk)
})

