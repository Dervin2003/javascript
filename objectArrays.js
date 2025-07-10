//FUNCTIONS

// function newFunction(){
//     console.log("Hello")
// }

// newFunction();

// const add = function (a,b){
//     return a+b;
// } 

// console.log(add(3,4));

/*
    ARROW FUNCTION
const subtract = (a,b) => {
    return a-b;
}

console.log(subtract(7,2))
/*

/*
    HIGHER ORDER FUNCTION

function calculator(a,b,operation){
    return operation(a,b);
}

function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

console.log(calculator(1,2,division))
*/

/*
    CALL BACK FUNCTION

function fetchData(callback) { 
  setTimeout(() => { 
    callback("Data loaded"); 
  }, 1000); 
} 
 
fetchData(function (message) { 
  console.log(message);
 });
 */

//ARRAYS

// const arr =["Name:A","Name:B","Name:C"];

// arr.push("Name:D")
// arr[4]="Name:E";
// arr.pop();
// arr.unshift("Name:F")
// const arrNew= new Array(1,2,3,4)
// console.log(arr);
// console.log(arrNew);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(num){
//     console.log(num)
// })

// const [x,y,z]=arr;
// console.log(x);
// console.log(z);

// const newObject ={
//     Name:"Dervin",
//     Age:22
// }

// const testObject=new Object();
// testObject.Name="No Name"
// testObject["Age"]=0

// console.log(newObject)
// console.log(testObject)

// const calc ={
//     add: function(a,b){
//         return a+b
//     },

//     sub:function(a,b){
//         return a-b
//     },

//     mul:function(a,b){
//         return a*b
//     }
// };

// console.log(calc.mul(4,5));