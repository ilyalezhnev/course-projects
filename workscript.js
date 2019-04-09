'use strict'

let startCalc = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value"),
    dayBudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthSavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearSavingsValue = document.getElementsByClassName("yearsavings-value"),

    expensesItem = document.getElementsByClassName("expenses-item"),
    expensesItemBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
          b = prompt("Во сколько обойдется?", "");
    
      if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 20 ) {
          console.log("Done!");
          appData.expenses[a] = b;
      } else {
          alert("Неправильный формат ввода, попробуйте еще раз!");
          console.log("Неправильный ввод");
          i--;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедевный бюджет составляет: " + appData.moneyPerDay + "руб.");
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 500) {
      console.log("Низкий уровень достатка");
    } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка!");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?", ""),
          percent = +prompt("Под какой процент?", "");
  
      appData.monthIncome = ( save / 100 / 12 * percent ).toFixed();
      alert("Доход в месяц с Вашего депозита составит: " + appData.monthIncome + " руб.");
    }
  },
  chooseOptExpenses: function() {
    for(let i = 0; i < 3; i++) {
      let opt = prompt("Введите статью необязательных расходов", "");
      appData.optionalExpenses[i] = opt;
    }
  },
  chooseIncome: function() {
      let items = prompt("Что принесет доп. доход? (Перечисли через запятую)", "");
      if (typeof(items) != "string" || items == "" || typeof(items) == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();
    }

    appData.income.forEach(function(item, i) {
      alert("Способ доп.заработка: " + (i + 1) + " - " + item);
    });
  }
};

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

