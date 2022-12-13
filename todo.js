// event function
const sayHello = (event) => {
    console.log("Hello world!!");
};

// event function
const changeBackgroundColor = (index) => {
    const box = document.getElementsByClassName("todo-box")[index];
    // console.log(box);
    box.style.backgroundColor = "gray";
};

// getElementsByClassName
const wraps = document.getElementsByClassName("wrap");
// console.log(wraps);

// querySelector
const title = document.querySelector("#title");
// console.log(title);
title.style.backgroundColor = "yellow";

// getElementsByTagName
const buttons = document.getElementsByTagName("button");
// console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", sayHello);
}

// DOM 요소 추가
const new_div = document.createElement("div");
// console.log(new_div);
new_div.style.width = "100px";
new_div.style.height = "100px";
new_div.style.backgroundColor = "blue";

// 완료하기 function
function completeTodo(event) {
    console.log(event.target);
    console.log(event.target.parentElement);
    event.target.parentElement.style.backgroundColor = "green";
}
