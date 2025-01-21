// let promise = new Promise ((resolve,reject)=>
// {
//     let success  = false;
//     if (success){
//         resolve("the operation was successful")
//     }else{
//         reject("the operation was failed");
//     }
// }
 
// );
// promise
// .then((message) => {
//     console.log("success:" + message);

// })
// .catch((error)=>{
//     console.log("error:"+ error);
// });
////------------------------------------------------------------------------------

// function fetchData(){
//     return new Promise ((resolve,reject)=>
//    {
//     console.log("fetching data....");

//     setTimeout(()=>{
//         let success = false;
//         if (success){
//             resolve("Data fetched successfully");
//         }else{
//             reject("failed to fetch data");

//         }
//     },2000);
//    } );
// }
// fetchData()
// .then((data)=>{
// console.log(data);
// })
// .catch((error)=>{
//     console.error(error);
// });

////======================chaining================================

function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("step 1 complete");
        },1000);
    });
}

function step2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("step 2 complete");
        },1000)
    });
}
function step3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("step 3 complete");
        },1000);
    });
}

//chaining steps
step1()
.then((result1)=>{
    console.log(result1);
    return step2();
})
.then((result2)=>{
    console.log(result2);
    return step3();
})
.then((result3)=>{
    console.log(result3);
    console.log("all steps completed");
    
});