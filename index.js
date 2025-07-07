//Types of variables
let a=1;
let b='1';
if(a==b){
    console.log("true");
}
else{
    console.log("false");
}

if(a===b){
    console.log("true");
}
else{
    console.log("false");
}

let x=3;
let y=3;
if(x==y){
    console.log("true");
}
else{
    console.log("false");
}

if(x===y){
    console.log("true");
}
else{
    console.log("false");
}


var c=1;
if (c==1){
    var c=2;
}
console.log(a)

let d=1;
if(d==1){
    let d=2;
}
console.log(b)

const e=2;   // cannot change the value

// Data types
console.log(typeof(a));
console.log(typeof(b));

let f;

let g=false;

console.log(typeof(f));
console.log(typeof(g));

// Ternary operators

g=(g==false)?true:false;
console.log(g);

//Operators
let l=10;
let m=20;

console.log("add : "+(l+m));
console.log("subtract : "+(l-m));
console.log("Multiply : "+l*m);
console.log("Divide : "+l/m);
console.log("Modulus : "+l%m);
console.log("Exponential : "+l**m);