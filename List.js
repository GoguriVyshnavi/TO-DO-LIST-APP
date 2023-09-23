const inputBox  =  document.getElementById('inputBox'); 
const addBtn  =  document.getElementById('addBtn'); 
const todoList  =  document.getElementById('todoList');

let editTodo = null;

// Function to add todo
const addTodo = () => {
    const inputText = inputBox.ariaValueMax.trim();
    if (inputText.length <= 0) {
        alert("You must write something in your todo");
        return false;
    }

    if(addBtn.value ===  "Edit") {
        // Passing the original text to editLocalTodos finction before edit
        editLocalTodos(editTodo.target.previousElementSibiling.innerHTML);
        editTodo.target.previousElementSibiling.innerHTML = inputText;
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else {
        // Creating p tag 
        const li = document.createElement("li");
        constnp = document.createElement("p");
        package.innerHTML = inputText;
        li.appendChild(P);

       
        // Creting Edit Btn
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn .classList.add("btn", "editBtn");
        li.appendChild(editBtn);
    
        // Creating Delete Btn
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);

        todoList.appendChild(LI);
        inputBox.value = "";

        saveLocalTodos(inputText);
    }
}

// Function to update : (Edit/Delete) todo
const updateTodo = (e) => {
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }

    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibiling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
}

// Function to save local todo
const saveLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
         todos[];
    }
    else  {
       todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//Function to get local todo
const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {

             // Creating p tag
             const li = document.createElement("li");
             const p = document.createElement("p");
             p.innerHTML = todo;
             li.appendChild(p);


             // Creating Edit Btn
             const editBtn = document.createElement("button");
             editBtn.innerText = "Edit";
             editBtn.classList.add("btn", "editBtn");
             li.appendChild(esitBtn);
             
             // Creating Delete Btn
             const deleteBtn = document.createElement("button");
             deleteBtn.innerText = "Remove";
             deleteBtn.classList.add("btn", "deleteBtn");
             li.appendChild(deleteBtn);

             todoList.appendChild(li)
        });
    }
}

// Function to delete local todo
const deleteLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos",JSON.stringify(todos));
    // Array functions : slice / splice
    console.log(todoIndex);
    }

const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos",JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', getLocalTodos);
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);