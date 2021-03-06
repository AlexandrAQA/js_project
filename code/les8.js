const category = 'toys';
const subCategory = 'boys';
console.log('https://oldwebsite.com/' + category);
console.log(`https://newsite.com/${category}/5/2/`);
//Интерполяция - мы можем вставлять переменные внутрь урлов
//или любого текста с помощью косых ковычек `` и ${}
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals

console.log(+'10' + 10); // =20 '+' TURNs string to Number
console.log('10' + 10); // =1010 
console.log(10 + +'10'); // =20

let incr = 10,
    decr = 10;

incr++;
decr--;
let tr = true,
    fl = false,
    changed = incr < decr;

console.log(incr, decr);
console.log(tr && !fl);
console.log(fl || changed || tr);

let string = '18';
let a = 2 + +string;
console.log(a);

console.log('MacOS 2');
console.log('MacOS 2');
console.log('MacOS 2');
console.log('MacOS 2');

let nul = null;
let underf = undefined;
console.log(typeof(nul)); // object
console.log(typeof(underf)); //underfined
console.log(nul == underf); //true
console.log(nul === underf); //false

const arr1 = [];
const arr2 = [];
console.log(arr1 === arr2); //false
console.log(arr1 == arr2);  //false