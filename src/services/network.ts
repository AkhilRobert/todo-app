export type Todo = {
  _id?: string;
  title: string;
  finished: boolean;
};

export async function getAllTodos() {
  return await fetch('http://localhost:5000/api/todo').then((res) => {
    return res.json();
  });
}

export function deleteTodo(id: string) {
  fetch(`http://localhost:5000/api/todo/${id}`, {
    method: 'DELETE'
  }).then();
}

export function updateTodo(id: string, data: Todo) {
  fetch(`http://localhost:5000/api/todo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then();
}

export async function createTodo(data: Todo) {
  return await fetch('http://localhost:5000/api/todo/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}
