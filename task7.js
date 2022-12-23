//TTRAVERSING THE DOM

let itemList = document.querySelector("#items");
//PARENTNODE
itemList.parentNode.style.backgroundColor="#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);

//PARENTELEMENT
itemList.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

//CHILNODES
console.log(itemList.childNodes);
console.log(itemList.children);
itemList.children[1].style.backgroundColor="red";

// //FIRSTCHILD
// console.log(itemList.firstChild);
// //FIRST ELEMENT CHILD
// console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor="yellow";

//LASTCHILD
//console.log(itemList.lastChild);
//LAST ELEMENT CHILD
// console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor="blue";

//next sibling
//console.log(itemList.nextSibling);
//next element sibling
//console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="green";

//CREATE ELEMENT
let newDiv = document.createElement("div");
newDiv.className = "Hello";
//newDiv.textContent="I am new div";
newDiv.id="hellooooo";
newDiv.setAttribute("title","Hello Div");
var newdivText = document.createTextNode("Hello Div");
newDiv.appendChild(newdivText);
newDiv.style.fontSize="25px";
let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");
container.insertBefore(newDiv,h1);
console.log(newDiv);




