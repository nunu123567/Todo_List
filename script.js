let todo = [
    "task 1",
    "task 2"
];

const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");

function renderTodo() {
    todoList.innerHTML = "";

    todo.forEach((toDo, index) => {
        const li = document.createElement("li");
        li.textContent = todo + " ";

        const removeButton = document.createElement("button");
        removeButton.textContent = '✕';
        removeButton.className = 'removeButton';

        removeButton.addEventListener("click", function() {
            removeTodo(index);
        });

        li.appendChild(removeButton);
        todoList.appendChild(li);
    });
}

function removeTodo(index) {
    todo.splice(index, 1);
    renderTodo();
}


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

    todo.push(text);
    renderTodo();
    todoInput.value = "";
});

renderTodo();