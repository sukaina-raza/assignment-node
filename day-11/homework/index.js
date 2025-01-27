import express from 'express'
const app = express();
const port = 8000;

app.use((req,res,next)=>{
    console.log(`logging ${req.method} ${req.method} ${req.url}`);
    next();
})







app.use("/users", (req,res,next)=>{
const {pwd, role}=req.query;

console.log(role,pwd)

if(pwd === "pakistan.." & role === "admin"){
    console.log(" you are right")
    next()
}
else{
    res.status(403).send("forbidden");
}
});

app.get("/admin",(req,res)=>{
    res.send("Admin is here");
})

app.get("/users/:id",(req,res)=>{
    res.send("user is here")
})

app.post("*/admin", (req,res)=>{
    })

    app.get("*/abc/:id", (req,res)=>{
        res.send(`hello ${req.params.id}`);

    })
    app.get("/", (req,res)=>{
        res.send("Hello home")
    })

    app.listen(port, ()=>{
        console.log(`server is running at ${port}`)
    })
    