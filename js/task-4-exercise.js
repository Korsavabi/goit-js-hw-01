'use strict';



const credits = 23580;

let pricePerDroid = 3000;

const totalPrice = +prompt('Количество дроидов: ');



if (totalPrice == 0) {
    console.log(`Отменено пользователем!`);

} else {
    let sum = totalPrice * pricePerDroid
    sum > credits ? console.log('Недостаточно средств на счету!') : console.log(`Вы купили ${totalPrice} дроидов, на счету осталось ${credits - sum} кредитов.`);

}
