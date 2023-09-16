const EmitterEvent=require("events")

const events = new EmitterEvent();

events.on('test',()=>{
console.log("it is tested")
})
events.emit("test");

events.removeListener("test");

events.emit("test")

