const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// const todo = document.querySelector('.todo');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  const todoLi = document.createElement('li');
  todoLi.textContent = todoInput.value;
  todoLi.classList.add('todo-item');
  todoDiv.appendChild(todoLi);
  const completeButton = document.createElement('button');
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  sendTodo(todoInput.value);
  todoInput.value = '';
}

function deleteCheck(e) {
  const item = e.target;
  // deleting
  if (item.classList[0] == 'trash-btn') {
    const todo = item.parentElement;
    //animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }
  //checking
  if (item.classList[0] == 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

async function sendTodo(todo) {
  const data = {
    body: todo,
    done: false,
    created: '2022-06-07T18:00:16.211639Z',
  };
  let csrftoken = 'nvuoeanvjds68rwnijsvgjb87bhuninhib78j';
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      'X-CSRFToken':
        'OwOBzGwvZl2yvOePa8un1sm9hSJioT83r5PnCSeE5C7ORiirllV2OupQ3kAx3353',
    },
    body: JSON.stringify(data),
  };
  await fetch('http://127.0.0.1:8000/api/create/', options);
}

async function getData() {
  let res = await fetch('http://127.0.0.1:8000/api/todos/');
  let data = await res.json();
  console.log(data);
}
getData();
