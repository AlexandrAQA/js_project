'use strict';
const conf = confirm('Are you here?'); // confirm('question')
console.log(conf);

const answer = prompt('How old are You?', '18');
const answerNumber = +prompt('How old are You?', '18'); 
//'+'convert from str to Number

console.log(typeof(answerNumber));
console.log(typeof(answer));
//by default All answers from user it's string

const answers =[];
answers[0] = prompt('What is your First name?', '');
answers[1] = prompt('What is your Last name?', '');
answers[2] = prompt('How old are you?','');

//document.write(answers);
console.log(typeof(answers));
//alert(), prompt(), confirm() - live only into Browser! 
//They don't live into Console