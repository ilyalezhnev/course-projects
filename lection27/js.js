// Interpolation

let name = "Ivan",
    age = 30,
    mail = "ex@gmail.com";

document.write(`Пользователю ${name} ${age} лет. Его почта - ${mail}`);



// let instead var

function makeArray() {
  var items = [];

  for (let i = 0; i < 10; i++) {
    var item = function() {
        console.log(i);
    };
    items.push(item);
  }
  return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();



// Arrow function

let fun = () => {
  console.log(this);
};

fun();



// Create a class

class Rectangle {
  constructor (height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());


// оператор spread - пишется как "..." перед переменной содержащей массив - разворачивает массив (отображает все элементы массива)

let video = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

let numbers = [8, 5, 7, 2];

log(...numbers);



// Homework

class Options {
  constructor (height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize + "px";
    this.textAlign = textAlign;
  }
  createDiv () {
    let element = document.createElement("div");
    document.body.appendChild(element);
    element.textContent = "Some text!)";

    element.style.cssText = `height: ${this.height}; width: ${this.width}; \
    background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
  }
}

let newDiv = new Options(100, 200, "red", 20, "center");

newDiv.createDiv();



