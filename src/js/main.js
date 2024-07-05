// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const tasks = [
  { id: 1, text: "Cras justo odio", completed: false },
  { id: 2, text: "Dapibus ac facilisis in", completed: false },
  { id: 3, text: "Morbi leo risus", completed: true },
  { id: 4, text: "Cras justonnnnn odio", completed: false },
  { id: 5, text: "Dapibus ac facilisis in", completed: true },
  { id: 6, text: "Morbi leo risus", completed: false },
  // Add more tasks here
];

const listElement = document.querySelector('.list-group');

tasks.forEach(task => {
  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'border-start-0', 'border-top-0', 'border-end-0', 'border-bottom', 'rounded-0');

  const checkbox = document.createElement('input');
  checkbox.classList.add('form-check-input', 'me-2');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;

  const taskText = document.createElement('span');
  taskText.textContent = task.text;
  taskText.classList.add('flex-grow-1', 'ms-2');
  if (task.completed) {
    taskText.classList.add('text-decoration-line-through');
  }

  const removeButton = document.createElement('a');
  removeButton.href = '#';
  removeButton.classList.add('fas', 'fa-ellipsis-v', 'text-primary');
  removeButton.dataset.mdbTooltipInit = 'true';
  removeButton.title = 'Remove item';

  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(removeButton);

  listElement.appendChild(listItem);
});