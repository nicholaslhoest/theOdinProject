const container = document.querySelector('#container');

const content = document.createElement("div");
content.classList.add("content");
const para = document.createElement("p");
para.textContent = " Hey I'm Red ";

const head = document.createElement("h3");
head.textContent = " I'm a Blue h3 ";

para.style.color = "red";
content.style.border = "1px solid";
content.style.backgroundColor = "pink";

container.appendChild(content);
content.appendChild(head);
content.appendChild(para);

// JavaScript Button
const button = document.querySelector("#btn");
button.onclick = () => alert("Hello World Java Script");

// JavaScript Button 2 Type
const button2 = document.querySelector("#JSbtn");
button2.addEventListener('click', () => {
    alert("Hello World");
})
