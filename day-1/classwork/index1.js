console.log("hello testing  world")
let a=10
let b=6
console.log(a,b);
console.log(process.argv[2]);
let enviroment= process.argv.slice(2)
console.log(enviroment)
enviroment.forEach(element => {
    let obj=element.split ('=')
    console.log(obj);
    let [key,value]=obj
    console.log(key.replace("--",""))
})