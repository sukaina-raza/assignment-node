import express from 'express';
const abc = express();
const port=8000;
abc.get('/',(req,res)=>{
    res.send('hello')
});
abc.listen(port)