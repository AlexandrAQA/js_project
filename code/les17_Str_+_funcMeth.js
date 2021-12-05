console.log("two\nlines"); // '\n ' in order to separate strings
console.log("one very\
long\
line");
// '\' in oreder to union strings

console.log(`Lorem... the end of the 1st line 
Second line start`); // use `` for natural separate lines 

console.log('O\'Reilly\'s book can\'t write code instead of you'); 
/* '\' the backslash allows you to escape
from the usual interpretation of the single-quote character 
*/
let str = 'Some text';
console.log(str[0]);  // we can consider string as a array
console.log(str[str.length-1]);

const fname = 'Ivan Ivanov';
const phoneNumber = '+900 123 123';
let message = `\u2718 Test failure at ${fname}:${phoneNumber}`;
const heart = `\ud83d\udc99`;
console.log(message + heart);

const test = 'Ivan Urgant';
console.log(test.indexOf('I'));
console.log(test.slice(0, 11)); //1st arg => start; 2nd arg => end  
console.log('substring(): ' + test.substring(0,4)); //cut like 'slice' but without '-5' and we can set start > end
console.log('slice(): ' + test.slice(0,4));
console.log('substr(): ' + test.substr(0,4));
console.log(test.slice(1,2).toUpperCase() 
+ test.slice(2,5) + "" + test.slice(7,8).toUpperCase()+ test.slice(8,10));

console.log(`\n`.length); //строка содержит одиночный символ новой строки
console.log(String.raw`\n`.length); //строка содержит символ обратной косой черты и букву n