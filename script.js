let todoList = [];

function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();

  if (task) {
    todoList.push(task);
    input.value = '';
    renderTodos();
  }
}

function removeTodo(index) {
  todoList.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById('todo-list');
  const count = document.getElementById('task-count');

  list.innerHTML = '';

  todoList.forEach((todo, index) => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = todo;
    span.onclick = () => {
      span.classList.toggle('completed');
    };

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '🗑️';
    delBtn.onclick = () => removeTodo(index);

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });

  count.textContent = `You have ${todoList.length} pending tasks`;
}

function clearAll() {
  todoList = [];
  renderTodos();
}
