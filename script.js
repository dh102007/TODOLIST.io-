const addBtn = document.querySelector('.addBtn');
const todoText = document.querySelector('.todoText');
const todoList = document.querySelector('.todoList');

const addTodo = () => {
  const task = todoText.value.trim();
  if (task === '') return alert('할 일을 입력해주세요.');

  const li = document.createElement('li');
  li.className = 'todo';

  const taskSpan = document.createElement('span');
  taskSpan.className = 'task';
  taskSpan.textContent = task;

  const trashSpan = document.createElement('span');
  trashSpan.className = 'trash';
  trashSpan.textContent = 'x';

  trashSpan.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(taskSpan);
  li.appendChild(trashSpan);
  todoList.appendChild(li);

  todoText.value = '';
  todoText.focus();
};

addBtn.addEventListener('click', addTodo);

todoText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodo();
});

document.querySelectorAll('.trash').forEach(trashBtn => {
  trashBtn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });
});
