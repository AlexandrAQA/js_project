//while

let num = 50;

while (num <= 55){
    console.log(num);
    num++;
};

//do... while

let num2 = 50;
do {
    console.log('Num2:',num2);
    num2++;
} while (num2 <= 55);

//for + if + break + continue
 for(let i = 0; i < 20; i++){
     if(i === 6){
         continue; // пропуск значения
     } else if (i === 15){
         break; // остановка цикла и выход из него
     }
     console.log(i);
 }

 