import fs from 'fs'
//make directory-----------

fs.mkdir("./ali.js", function(err){
    if (err){
        console.log(err)
    } else{
        console.log("new directory has been created")
    }
})