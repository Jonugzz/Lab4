var post = document.getElementById("post");
var clear = document.getElementById("clear");
var mark = document.getElementById("mark");
var del = document.getElementById("delete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);


function TodoPost(event){
    event.preventDefault();
    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("list");
    
    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    var label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.name = "todo";
    label.textContent = todo;
    label.className = "lb";

    div.appendChild(checkbox);
    div.appendChild(label);

    list.appendChild(div);

    document.getElementById("todoText").value = "";
}

function TodoClear(event){
    var todos = document.getElementsByName("todo");

    for(var i=0; i<todos.length; i++){
        todos[i].checked = false;
    }
}

function TodoMark(event){
    var todos = document.getElementsByName("todo");

    for(var i=0; i<todos.length; i++){
        todos[i].checked = true;
    }
}

function TodoDel(event){
    var list = document.getElementById("list");
    list.innerHTML="";
}