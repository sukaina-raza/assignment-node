import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 8000;

// serving actual path
// app.use(express.static('assets'))

//serving a virtual path
app.use('/static', express.static(path.join(__dirname, 'assets')))

app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.send("working");
})
app.listen(port,()=>{
    console.log("working");
})
app.get('/about',(req,res)=>{
    res.render('about');
})