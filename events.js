import events from "events"

console.log('Start')
const customEmitter = new events()

customEmitter.on('response',(name)=>
{
    console.log('data',name);
})
// customEmitter.emit('response')
// customEmitter.on('response',()=>
// {
//     console.log('data2');
// })

customEmitter.emit('response','my name') //suscribe the event response
// customEmitter.emit('response')
console.log('End')