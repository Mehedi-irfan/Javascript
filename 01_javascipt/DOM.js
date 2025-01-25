/**
 * The DOM (Document Object Model) in JavaScript is a programming interface that allows you to interact with the structure and content of a webpage. It represents the HTML and XML documents in a tree-like structure where each element of the document is a node that you can access and manipulate using JavaScript.
 */

//with id
const heading = document.getElementById("myHeading");
//with single tag
const paragraph = document.querySelector("p");
//to all tag
const items = document.querySelectorAll("li");

//using this you can change main content or text
const headings = document.querySelector("h1");
headings.textContent = "Hello, World!";
//using this you can change style
headings.style.color = "blue";
headings.style.fontSize = "2rem";

//you can get attribute and change the atrribute
heading.setAttribute("id", "main-heading");
console.log(heading.getAttribute("id"));

