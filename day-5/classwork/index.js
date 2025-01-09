import fs from "fs"
const content = 'hello!';
fs.writeFile('mmm.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("added")
  }
});

fs.readFile("aaa.txt","utf8",(err,data)=>{
    if (err)console.log("file not found")
        console.log(data)
}
)
