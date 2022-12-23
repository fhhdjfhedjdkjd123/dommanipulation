//GET ELEMENTS BY QUERYSELECTOR
// var header = document.querySelector("#main-header");
// header.style.color="red";
// console.log(header);
// var input = document.querySelector('input');
// input.value='hello world';
// let item = document.querySelector(".list-group-item:nth-child(2)");
// item.style.backgroundColor="green";
// let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.display="none";

//GET ELEMENTS BY QUERYSELECTOR ALL
let items = document.querySelectorAll(".list-group-item");
items[1].style.color="green";
for(let i=0;i<items.length;i=i+2){
    items[i].style.backgroundColor="green";
}
