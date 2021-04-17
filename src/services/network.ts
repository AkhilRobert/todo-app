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

export async function deleteTodo(id: string) {
  return await fetch(`http://localhost:5000/api/todo/${id}`, {
    method: 'DELETE',
  });
}

export async function updateTodo(id: string, data: Todo) {
  return await fetch(`http://localhost:5000/api/todo/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function createTodo(data: Todo) {
  return await fetch('http://localhost:5000/api/todo/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
