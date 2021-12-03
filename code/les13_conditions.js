const number = 50,
    number2 = 99;

if (number == 4){
    console.log("Number is equal 4! That's True");
} else if (number2 > 100){
    console.log("Number2 is big! That's True");
} 
else {
    console.log('Error');
}

//ternar operetor

(number2 === 99) ? console.log('Ok') : console.log('Error!');

//switch

const sw = 'js';
switch (sw){
    case 'false':
        console.log('false');
        break;
    case 'true':
        console.log('NO');
        break;
    case 'Js':
        console.log('YES');
        break;
    default:
        console.log('Sorry, Try Later');
        break;
}









