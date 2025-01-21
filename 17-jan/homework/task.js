const task1 = new Promise ((resolve)=>
    setTimeout(()=>
    resolve("task 1 is done"),1000));

const task2 = new Promise((resolve)=>
    setTimeout(()=>
    resolve("task 2 is done"),2000));

const task3 = new Promise ((resolve)=>
     setTimeout(()=>
     resolve("task 3 is done"),3000));

Promise.all([task1,task2,task3]).then((results)=>{
    console.log("All tasks finished:",results);
});
