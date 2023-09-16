const http=require('http')

http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type': 'text/html' })
        res.write("<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>");
        res.end()
    }
}).listen(9999)
console.log(`server is running on 9999`)