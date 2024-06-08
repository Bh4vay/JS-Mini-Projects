const todoInput = document.getElementById("todoInput");
const todoBtn = document.getElementById("todoBtn");
const todoList = document.getElementById("todoList");

todoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

let num = 1;
function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const deleteBtn = document.createElement("button");

        span.innerText = num + ") " + todoText;
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", () => {
            todoList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = "";
        num++;
    }
}
