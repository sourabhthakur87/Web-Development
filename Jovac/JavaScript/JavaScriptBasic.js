// var a=10;
// var b="10";
// var is=false

// console.log(a);
// console.log(typeof(is));
// console.log(a+b)

// console.log(b);
// console.log(a==b);
// console.log(a===b);


// console.log(a<b?"Hello":"Bye")


// if(a<=b){
//     console.log("Hello")
// }
// else{
//     console.log("Hii")
// }

// var arr=[1,2,3,"Hi","Hello",true,false]


// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.pop() //Delete from last
// arr.shift()        //Delete from starting
// arr.push("Push")
// arr.unshift("Starting")

// arr.forEach(element => {
//     console.log(element)
// });

// var jsObject = {
//     id: 123,
//     name: "abc",
//     age: 30,
//     salary: 5000.00
// };

// console.log(jsObject)
// console.log(jsObject.name)

// var data = [
//     {name: "Scahin", age: 10},
//     {name: "Sourabh", age: 50},
//     {name: "Sanjay", age: 40},
//     {name: "Sonu", age: 20},
// ];

// data.forEach(element => {
//     console.log(`name: ${element.name}  Age: ${element.age}`)
// });


// function sum(x,y){
//     return x+y
// }

// var sub =(x,y)=> x-y;

// var result=sum(20,15);
// console.log(result)
// console.log(sub(20,15))

// var a = prompt();
// var b = prompt();

// c=console.log(a + b)

var a=parseInt(prompt("Enter the First number"));
var b=parseInt(prompt("Enter the Second number"));

var sum=a+b
var sub=a-b

console.log(`The result of Addition is: ${sum}`);
console.log(`The result of Subtraction is: ${sub}`);

alert(`The result of Addition is: ${sum}`);
alert(`The result of Subtraction is: ${sub}`);

// var f=10;
//      document.getElementById("res").innerHTML=f;
document.getElementById("add").innerHTML=`The result of Addition is: ${sum}`;
document.getElementById("sub").innerHTML=`The result of Subtraction is: ${sub}`;