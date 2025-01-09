import fs from 'fs'
// let reader = fs.createReadStream('json.txt', {
//     start:50,
//     end:1000,
// });
// reader.on('data',function(chunk){
//     console.log(chunk.toString());
// })

//-----------------------------------------------------------------------------------------

import { createReadStream , createWriteStream } from "fs";
var readablestream = createReadStream('json.txt');
var writablestream = createWriteStream('empty.js',{"flags":"a"});
readablestream.on('data',function(chunk){
writablestream.write(chunk);
});
