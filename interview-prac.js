//spread perator
const a=[1,2,3];
const b=[...a,4,5,6];
console.log(b);

const c={a:1, b:2};
const d={...c,f:4,g:2};
console.log(d);

function sum(a,b,c){
    return a+b+c;
}
const num=[1,2,3];
console.log(sum(...num));

//rest operator
const [first,...rest] = [10,20,30];
console.log(rest);

//closure

function arr(){
    var name='Ali Abbas';
    function init(){
        console.log(name);
    }
    init();

}
arr();
// async await
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data received"), 2000);
    });
}

fetchData()
    .then(response => {
        console.log(response);
        return "Processing data";
    })
    .then(processed => console.log(processed))
    .catch(error => console.error(error));

//null/ undefined
    let x;
    console.log(x)

    let y=null;
    console.log(y);

    let person = { name: "Ali", age: 25 };
person.age = null; 
console.log(person.age);
console.log(person)
// template literals
   const name="ali";
   const age="25";

   console.log(`hello! may name is ${name} and I am ${age} years old`)

   const message = `This is line 1 
This is line 2
This is line 3`;

console.log(message)
//--------------------
function greet(name){
    return `Hello ${name}`
}
console.log(`message:${greet("ALI")}`);
console.log(`says:${greet("Hasan")}`);


function outer() {
    let outerVar = "I am from outer function";

    function inner() {
        let innerVar = "I am from inner function";
        console.log(outerVar); //  Accessible
        console.log(innerVar); //  Accessible
    }

    inner();
    console.log(outer); 
}

outer();

const numbers=[1,2,3,4,5];
const doubled= numbers.map(a=>a*2);
console.log(doubled);

const p=[1,2,3,4,5];
const q=p.reduce((a,b)=>a+b);
const r=p.filter(a=>a%2);
console.log(r);
console.log(q);

const number=[1,2,5,6];
const fe= number.forEach(a=>console.log(a*2));
console.log(fe);
const me= number.map(a=>a*2);
console.log(me)

function First() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

First();

//=====================

console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 500);

console.log("End");

