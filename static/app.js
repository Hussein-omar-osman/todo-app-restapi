const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// const todo = document.querySelector('.todo');
let getCookies = function () {
  let pairs = document.cookie.split(';');
  let cookies = {};
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split('=');
    cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='));
  }
  return cookies;
};
let myCookies = getCookies();

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
    console.log(todo);
    let id = todo.getAttribute('id');
    console.log(id);
    todo.classList.add('fall');
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
  }
  //checking
  if (item.classList[0] == 'complete-btn') {
    const todo = item.parentElement;
    let id = todo.getAttribute('id');
    console.log(id);
    let allClasses = todo.classList;

    todo.classList.toggle('true');
    console.log(allClasses);
    console.log(typeof allClasses);
    if (todo.classList.contains('true')) {
      console.log('yes');
      updateTodo(id, true);
    } else {
      console.log('no');
      updateTodo(id, false);
    }
  }
}

async function updateTodo(id, bool) {
  const data = {
    done: bool,
  };
  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      'X-CSRFToken': myCookies.csrftoken,
    },
    body: JSON.stringify(data),
  };
  let res = await fetch(`http://127.0.0.1:8000/api/update/${id}`, options);
  let data_received = await res.json();
  console.log(data_received);
}
async function sendTodo(todo) {
  const data = {
    body: todo,
    done: false,
    created: '2022-06-07T18:00:16.211639Z',
  };
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      'X-CSRFToken': myCookies.csrftoken,
    },
    body: JSON.stringify(data),
  };
  let res = await fetch('http://127.0.0.1:8000/api/create/', options);
  let data_received = await res.json();
  console.log(data_received);
}

async function getData() {
  let res = await fetch('http://127.0.0.1:8000/api/todos/');
  if (res.ok) {
    console.log('success');
  } else {
    console.log('unsuccess');
  }
  let data = await res.json();
  console.log(data);
}
getData();

console.log(myCookies.csrftoken);
