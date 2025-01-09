import fs from 'fs'
const content = 'hi!';
fs.appendFile('ggg.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("done")
    
  }
});
