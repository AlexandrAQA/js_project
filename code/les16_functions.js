'use strict';
//function declaration
//That function is created before the script starts! We can use it even before declaration (Hoisted):

calc(2,5); // function сompleted

function calc(a, b){ //the same function is created
    console.log('Function Declaration');
    return a + b;
}


/*  Function Exrpession is created only when the flow is coming (Not Hoisted!)
*   let a = function(){
     some code
    }
*   We can run this function after declaring only */

const expresFunc = function(arg1, arg2){
    console.log('Function Exrpession');
    return arg1 - arg2;
};
expresFunc(10,5);

/* Arrow functions (Not Hoisted!)
No .this
*/
const calc2 = (a, b) => {
    return (a + b);
};

const calcArrow = (a = 'string', b = 0) => a + b;  //Default Params
const a = arg0 => {         
    console.log(arg0);        
};
a('1');

// rest params or endless params
function sum(a, b, ...params){
    return a + b + params.reduce((a,b) => a + b);
}
const x = sum(1, 2, 3, 4, 5, 6, 7);
console.log(x);

//Closures Function
function makeCounter(){   //closure function that contains another function in return part
    let c = 0;
    return function(){    //external function
        return ++c;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());

//Methods: it's a function however inside of the object
const person = {
    name: 'Ivan',
    lastName: 'Ivanov',
    call(){                 //call() without 'function' there is a method inside of object person.
        console.log(this.name + ' ' + person.lastName);
    },
};
person.call();

//work with time:
let time = Date.now();
let now = new Date();
let ms = now.getTime();
let iso = now.toISOString();
console.log(time, now, ms, iso);







