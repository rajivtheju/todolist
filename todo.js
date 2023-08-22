
const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTodoText = todoInput.value;
    if (newTodoText) {
        const newTodoItem = document.createElement('li');
        const newTodoCheckbox = document.createElement('input');
        newTodoCheckbox.type = 'checkbox';
        newTodoItem.appendChild(newTodoCheckbox);
        newTodoItem.appendChild(document.createTextNode(newTodoText));
        todoList.appendChild(newTodoItem);
        todoInput.value = '';
    }
});