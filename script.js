'use strict';

                    // Lesson 1





/* a = 5;
console.log(a);

var number = 5;
var string = "Hello, World!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

let persone = {
  name: "John",
  age: 25,
  isMarried: false
};

console.log(persone.name);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0]);

// alert("Hello!");

// let answer = confirm("Are you here?");

// console.log(answer);
 
// let answer = +prompt("Are you 18?", "Yes");

// console.log(typeof(answer));

// console.log("arr" + " - object");
// console.log(4 + +" - object");

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log("2" == 2);
console.log("2" === 2);

let isChecked = true,
    isClose = false;
console.log(isChecked || !isClose); */





                    // Lesson 2 Cycles





/* if (2 * 4 == 8) {
  console.log("Верно!)")
} else {
  console.log("Неверно!(")
} */

let num = 50;

if (num < 49) {
  console.log("Неверно!")
} else if (num > 100) {
  console.log("Много!")
} else {
  console.log("Верно!")
};

(num == 50) /* условие */ ? console.log('Верно') /* действие при выполнении условия */ : console.log('Неверно')/* действие при НЕвыполнении условия */;

(num ==50) ? console.log("True") : console.log("False");

switch (num) {
  case num < 49:
    console.log("Неверно!");
    break;
  case num > 100:
    console.log("Много!");
    break;
  case 50:
    console.log("Верно!");
    break;
  default:
    console.log('Что-то пошло не так!');
    break;
}





                    // Lesson 3 Cycles




                  
let num = 50;

while (num < 55) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
  if (i == 6) {
    continue
  }
  console.log(i)
}





                    // Lesson 4 Functions





/* 
function showFirstMessage(text) {
  console.log(text);
}

showFirstMessage("Hello, World!");
*/

/*
function calc(a, b) {
  return (a + b);
}
console.log(calc(5, 255));
*/

// В ES6 появился новый синтаксис вызова функций

let calc = (a, b) => a + b; // Объвление "стрелочной" функции

console.log(calc(5, 27));

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2";
console.log(Math.round(twelve));

let twelve = "12.2px";
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

let str = "man woman child kid";
console.log( str.indexOf("man", 4) );



let str = "Ослик Иа-Иа посмотрел на виадук"; // ищем в этой строке
let target = "Иа"; // цель поиска

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( foundPos ); // нашли на этой позиции
  pos = foundPos + 1; // продолжить поиск со следующей
}



let str = "ilya";
let newStr = str[0].toUpperCase() + str.slice(1);
console.log(newStr);





                    // Lesson 5 Callback-function





function first() {
  setTimeout( function() {
    console.log(1);
    }, 500);
}

function second() {
  console.log(2);
}

first();
second();



function learnJS(lang, callback) {
  console.log("Я учу " + lang);
  callback();
}

learnJS("Javascript", function() {
  console.log("Я прошел 3-ий урок!");
});





                    // Lesson 5 Objects





let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false; // добавляет свойство объекта
options.colors = { // добавляемое свойство в свою очередь тоже является объектом
  border: "black",
  bg: "red"
};

delete options.bool; // удаляет свойство объекта

console.log(options);

for (let key in options) { // вывод свойств объекта со значениями
  console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length);



// Массивы



let arr = [1, 2, 3, 4, 5];

arr.pop(); // удаляет последний элемент массива
arr.push("5"); // добавляет элемент из скобок последним
arr.shift(); // удаляет первый элемент
arr.unshift("1"); // добавляет элемент из скобок первым

console.log(arr);

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}




let arr = ["first", 2, 3, "four", 5];

arr.forEach(function(item, i, mass) {
  console.log(i + ": " + item + " (массив: " + mass + ")");
});




let mass = [1, 3, 4, 6, 7];

for (let key in mass) { // for (... in ...) выводит ключи элементов массива
  console.log(key);
}

let mass = [1, 3, 4, 6, 7];

for (let key of mass) { // for (... of ...) выводит значения элементов массива
  console.log(key);
}



let ans = prompt("", ""),
    arr = [];

arr = ans.split(",");
console.log(arr);



let arr = ["asfzv", "ttgs", "erg"],
    i = arr.join(", ");

console.log(i);



let arr = [1, 15, 4],
    i = arr.sort(compareNum);

function compareNum(a,b) {
  return a-b;
}

console.log(arr);




let soldier = {
  health: 400,
  armor: 100
};

let john = {
  health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);