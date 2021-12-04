'use strict';

// d = 123;
// console.log(d);

console.log('Hi JS');
console.log('Hi javaScript');
console.log('Hi everyone');


let x = 0.3 - 0.2;
let y = 0.35 - 0.25;
console.log(x===y); // true!

let x1 = 0.3 - 0.2;
let y1 = 0.4 - 0.3;
console.log(x1===y1); // false!

let x2 = 2.4 - 2.3;
let y2 = 3.4 - 3.3;
console.log(x2===y2); // true!

let x3 = 2.4 - 2.3;
let y3 = 0.4 - 0.3;
console.log(x3===y3); // false!



const a = "Ivan";
const obj = {
    name: 'John',
    age: 25,
    isMarried: false,
    a: 1,
    b: 2,
    c: '3'
};


console.log('=========================================');
console.log(obj.name);
console.log(obj['age']);

// console.log(number);
// let number = 12;
console.log('=========================================');

//              0           1           2     3   4       5
let array = ['jpg.jpg', 'apple.png', '1.git', {}, [], 'abraca.jpg'];
console.log(array[0], array[1]);
//массив - это частный случай объекта где индекс = ключ; а сам объект массива значением => 0: 'jpg.jpg'


{
    let res = -55;
    const result2 = 'string';
    console.log(res/0);
    console.log(result2 * 5);
    //console.log(someResult);
    let und;
    console.log('Undefined: ',und);
}
