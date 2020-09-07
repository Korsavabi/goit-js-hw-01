'use strict';

let input = prompt('');
let total = 0;


while( input ){
    input = +prompt();
    total +=  input;
}
console.log(`Общая сумма чисел равна: ${total}`);