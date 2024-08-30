// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

// Select the ul element
const ul = document.querySelector('ul');

// Loop through the todoList array
todoList.forEach(item => {
  // Create a new li element
  const li = document.createElement('li');

  // Create a new input element of type checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${item.id}`;
  checkbox.checked = item.completed; // Check if the task is completed

  // Create a new label element
  const label = document.createElement('label');
  label.htmlFor = `todo-${item.id}`;
  label.innerText = item.task;

  // Append the checkbox and label to the li
  li.appendChild(checkbox);
  li.appendChild(label);

  // Append the li to the ul
  ul.appendChild(li);
});
