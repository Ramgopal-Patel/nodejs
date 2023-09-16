const EmitterEvent =require('events')

const events=new EmitterEvent();

events.on('subscribe', (x)=>{
    console.log(`Thank you for subscribing to ${x}!`);
});

events.emit("subscribe","college wallah")