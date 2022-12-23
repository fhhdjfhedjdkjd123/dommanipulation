//TTRAVERSING THE DOM

let itemList = document.querySelector("#items");
//PARENTNODE
//itemList.parentNode.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentNode.parentNode.parentNode);

//PARENTELEMENT
//itemList.parentElement.style.backgroundColor="#f4f4f4";
//console.log(itemList.parentElement.parentElement.parentElement);

//CHILNODES
// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor="red";

// //FIRSTCHILD
// console.log(itemList.firstChild);
// //FIRST ELEMENT CHILD
// console.log(itemList.firstElementChild);
//itemList.firstElementChild.style.backgroundColor="yellow";

//LASTCHILD
//console.log(itemList.lastChild);
//LAST ELEMENT CHILD
// console.log(itemList.lastElementChild);
//itemList.lastElementChild.style.backgroundColor="blue";

//next sibling
//console.log(itemList.nextSibling);
//next element sibling
//console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color="green";

//CREATE ELEMENT
let newList = document.createElement("li");
newList.className = "Hello";
newList.id="hellooooo";
newList.setAttribute("title","Hello Div");
var newdivText = document.createTextNode("Hello world");
newList.appendChild(newdivText);
newList.style.fontSize="15px";
newList.style.listStyleType="none";
itemList.insertBefore(newList,itemList.firstElementChild);
console.log(newList);

let newTit = document.createElement("title");
newTit.className = "Hello";
var newTitText = document.createTextNode("Hello world");
newTit.appendChild(newTitText);
newTit.style.fontSize="15px";
let head = document.querySelector("head");
let title = document.querySelector("title");
head.insertBefore(newTit,title);
console.log(newTit);




