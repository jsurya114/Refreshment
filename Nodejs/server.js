const http=require('http')
let server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.write('this is my new page')
    res.end()
  
})
server.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000')
})