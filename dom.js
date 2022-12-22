// console.dir(document);
// console.log(document);
// console.log(document.images);
//BY ID NAME

// var title = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// var title = document.getElementById("header-title");
// console.log(title);
// title.textContent = "Welcome";
// title.innerText = "Welcome to Dom";
// console.log(title);
// header.style.borderBottom = "solid 4px #000";

//BYCLASSNAME
let items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}
items[2].style.backgroundColor="green";

