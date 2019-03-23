'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");

  if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 20 ) {
        console.log("Done!");
        appData.expenses[a] = b;
  } else {
    alert("Неправильный формат ввода, попробуйте еще раз!");
    console.log("Неправильный ввод");
    i--; // Дописать: если пользователь ничего не ввел, то вернуться к вопросу заново
  }
};

/* 
let i = 0;
while (i < 2) {
  let a = prompt("sv", ""),
      b = prompt("werg", "");

  if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "", b !=0 && a.length < 20) {
        appData.expenses[a] = b;
  } else {
    alert("Неправильный формат ввода, попробуйте еще раз!");
    console.log("Неправильный ввод");
    i--; // Дописать: если пользователь ничего не ввел, то вернуться к вопросу заново
  }
} */

/* 
let i = 0;
do {
  let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");

  if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 20 ) {
        console.log("Done!");
        appData.expenses[a] = b;
  } else {
    alert("Неправильный формат ввода, попробуйте еще раз!");
    console.log("Неправильный ввод");
    i--; // Дописать: если пользователь ничего не ввел, то вернуться к вопросу заново
  }
} */

appData.moneyPerDay = appData.budget / 30;

alert("Ежедевный бюджет составляет: " + appData.moneyPerDay + "руб.");

if (appData.moneyPerDay < 500) {
  console.log("Низкий уровень достатка");
} else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка!");
}