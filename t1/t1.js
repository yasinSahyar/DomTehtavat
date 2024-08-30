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

// Get the ul element from the DOM
const ulElement = document.querySelector('ul');

// Iterate over the todoList array
todoList.forEach(todo => {
  // Create the HTML string for each todo item
  const todoHTML = `
    <li>
      <input type="checkbox" id="todo-${todo.id}" ${todo.completed ? 'checked' : ''}>
      <label for="todo-${todo.id}">${todo.task}</label>
    </li>
  `;

  // Insert the HTML into the ul element
  ulElement.insertAdjacentHTML('beforeend', todoHTML);
});




/*

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

*/
