const todoInput = document.getElementById("todoInput");
const todoBtn = document.getElementById("todoBtn");
const todoList = document.getElementById("todoList");

todoBtn.addEventListener("click",addTodo);
todoInput.addEventListener("keypress",(e)=>{
    if(e.key === 'Enter'){
        addTodo();
    }
});
let num = 1;
function addTodo(){
    const todoText = todoInput.value.trim();

    if(todoInput.value !== ""){
        const li = document.createElement("li");
        li.innerText = num + ") "+todoText;
        num = num + 1;
        todoList.appendChild(li);
        todoInput.value = "";
    }
}