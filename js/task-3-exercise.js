'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

let message = prompt('Введите пароль: ');

if (message) {
  message === ADMIN_PASSWORD ? console.log(`Добро пожаловать!`) : console.log(`Доступ запрещен, неверный пароль!`);
} else {
  console.log(`Отменено пользователем!`);
}

