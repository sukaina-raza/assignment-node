import fs from 'fs'
//remove dir-----------
const dir='C:\Users\hp\Desktop\phase2\friday\remove'

fs.rmdir(dir, err => {
    if (err) {
      throw err;
    }
    console.log(`${dir} is deleted!`);
  });

