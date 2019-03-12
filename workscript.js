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

let i1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    h1 = prompt("Во сколько обойдется?", ""),
    i2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    h2 = prompt("Во сколько обойдется?", "");

appData.expenses.i1 = h1; // спросить у Дани как передается значение в свойство объекта
appData.expenses.i2 = h2;

alert(appData.budget / 30);
