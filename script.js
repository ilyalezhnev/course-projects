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





                    // Lesson 2





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





                    // Lesson 3 




                  
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

