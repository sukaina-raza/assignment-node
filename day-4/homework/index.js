const EventEmitter = require('events');
const meraEvent = new EventEmitter();
meraEvent.on('greet', (name,fname)=>
{
    console.log('hello',name,fname);
}
);
meraEvent.emit('greet','ali','hasan')