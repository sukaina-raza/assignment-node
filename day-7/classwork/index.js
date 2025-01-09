// ----------------read line----
import fs from 'fs';
import readline from 'readline';
const abc = readline.createInterface({
  input: fs.createReadStream('json.txt'),
  crlfDelay: Infinity
});

abc.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});


