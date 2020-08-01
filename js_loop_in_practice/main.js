const todos = [
  {
    id: 1,
    title: 'Go To School',
    completed: true
  },
  {
    id: 2,
    title: 'Go To Museum',
    completed: true
  },
  {
    id: 3,
    title: 'Go To Shopping',
    completed: true
  }
]

for(let i = 0; i < todos.length; i++) {
  let object = todos[i];
  if(object.completed === true) {
    console.log(i, object.title);
  }
}

for(let i in todos) {
  let todo = todos[i];
  if(todo.completed === true) {
    console.log(i);
  }
}

for(let todo of todos) {
  if(todo.completed === true) {
    console.log(todo.title);
  }
}
