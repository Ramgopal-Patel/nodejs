const fs = require('fs')

fs.readFile('nodejs_architecture.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})