const EmitterEvent=require("events");

const events= new EmitterEvent();

events.on("testMax",()=>{
    console.log(`The default maximum number of event listeners are:${events.getMaxListeners()}`)
})

events.emit("testMax")

events.on("testUpdated", () => {
    console.log(`The updated maximum number of event listeners are:${events.getMaxListeners()}`)
})
events.setMaxListeners(5)
events.emit('testUpdated')

