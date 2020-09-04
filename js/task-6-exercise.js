'use strict';

let input = prompt('');
let total = 0;


while( input ){
    total +=   input = +prompt();
   
    console.log(`Общая сумма чисел равна: ${total}`);
}