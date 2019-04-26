
let box = document.getElementById("box"),
    btn = document.getElementsByTagName("button"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "blue";
btn[1].style.borderRadius = "100%";

circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

// for (let i = 0; i < heart.length; i++) {
//   heart[i].style.backgroundColor = "blue";
// }

// heart.forEach(function(item, i, hearts) {
//   item.style.backgroundColor = "blue";
// });

let div = document.createElement("div"), // создает элемент
    text = document.createTextNode("Vasya was here!"); // создает текстовый узел

div.classList.add("black"); // присваивает элементу класс

// document.body.appendChild(div); //добавляет элемент в конец дерева
// wrapper.appendChild(div);

// div.innerHTML = "<h1>Hello, World!</h1>";

div.textContent = "Hello, World!";

document.body.insertBefore(div, circle[0]); // вставить перед
document.body.removeChild(circle[1]); // удалить элемент
wrapper.removeChild(heart[2]);

document.body.replaceChild(btn[1], circle[1]); // переместить (заменить) элемент

console.log(div);

