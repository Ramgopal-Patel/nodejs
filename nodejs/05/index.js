const fs = require('fs')

fs.unlink('nodejs_architecture.txt',(err)=>{
    if(err) throw err
    console.log("file is deleted successfully!")
})