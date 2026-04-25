const todos = [];

const input = document.getElementById("todoInput");

input.addEventListener("keydown", function (event) {
    if (event.key == 'Enter') {
        addTodo();
    }
})

function addTodo() {
    const value = input.value.trim(); // trim:공백제거

    if (value) {
        todos.push(value);
        input.value = "";
        renderTodos();
    }
}


function renderTodos() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const span = document.createElement("span");
        span.textContent = todo;

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                span.style.textDecoration = 'line-through';
            }
            else {
                span.style.textDecoration = 'none';
            }
        })

        li.appendChild(checkbox);
        li.appendChild(span);

        span.onclick = () => removeTodo(index);

        list.appendChild(li);
    });
}

function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

