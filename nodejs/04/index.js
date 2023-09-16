const fs=require("fs")

fs.appendFile("nodejs_architecture.txt", "High Performance, Scalability.Easy to Learn, Reduces Loading time using caching, Improves Response time and boosts performance, Large Community Support, Cost - Effective.Extensibility.",(err)=>{
    if(err) throw err;
    console.log("File appended successfully!");
    
})

fs.readFile("nodejs_architecture.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data)

})