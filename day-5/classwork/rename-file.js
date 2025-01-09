import fs from 'fs'
// RENAME FILE-------------------
fs.rename('./rename.js','./done.js',function(err)
{
    if (err) console.log("ERROR:"+err);
});
