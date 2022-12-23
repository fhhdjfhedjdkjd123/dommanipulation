let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

form.addEventListener("submit", addItem);
itemList.addEventListener("click",removeItem);
function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById("item");
    let li = document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem.value));

    let editBtn = document.createElement("button");
    editBtn.className="btn btn-primary float-right btn-sm";
    editBtn.appendChild(document.createTextNode("E"));
    li.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm  float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    newItem.value='';
}
function removeItem(e){
    e.preventDefault();
    //console.log(e.target);
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure you want to delete....?")){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }    
    
}

