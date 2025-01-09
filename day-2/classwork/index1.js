function enterNames (){
    let firstName = "ali";
        lastName = "hasan";
        return {
            firstName: firstName,
            lastName: lastName

        };
}
console.log(enterNames());

console.log(process.argv[2]);
let apple= process.argv.slice(2)
console.log(apple)
apple.forEach(element => {
    let obj=element.split ('=')
    console.log(obj);
    let [key,value]=obj
    console.log(key.replace("--",""))
})