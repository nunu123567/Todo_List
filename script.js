const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");

todoList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "none";
        } else {
            event.target.style.textDecoration = "line-through";
        }
    }
});

addButton.addEventListener("click",function() {
    const text = todoInput.value.trim();

    if(text === ""){
        return;
    }

    const li = document.createElement("li");
    li.textContent = text + " ";

    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";

    removeButton.addEventListener("click",function() {
        todoList.removeChild(li);
    }
);

    li.appendChild(removeButton);
    todoList.appendChild(li);

    todoInput.value = "";
}
);