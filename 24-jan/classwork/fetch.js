
// fetch('https://reqbin.com/echo/get/json')
//    .then(response => response.text())
//    .then(text => console.log(text))
// function getData(){
// fetch('https://jsonplaceholder.typicode.com/todos/2')
//       .then(response => response.json())
//       .then(json => console.log(json))}

//       getData()

////----------------------------------------------------------------------------------

class Animal{
    constructor(name,qualities,value){
        this.name=name;
        this.qualities=qualities;
        this.value=value

}
greet(){
    return`This is a ${this.name} and it can ${this.qualities} ${this.value}`;
}
}
const animal1=new Animal('cat', 'run' , 'very fast');
const animal2=new Animal('dog', 'run' , 'very fast');
const animal3=new Animal('rat', 'run' , 'very fast');
console.log(animal1.greet());
console.log(animal2.greet());
console.log(animal3.greet());