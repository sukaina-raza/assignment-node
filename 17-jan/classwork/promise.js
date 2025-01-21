let p = new Promise (function(resolve,reject){
    const userId=A1;
    if(userId ==== A1 ) {
        resolve("success")
    } 
    else{reject("failed")}
});

p.then(function(message){
    console.log("user id is" + message)

});
p.catch(function(message){
    console.log("user id is" + message)

});
