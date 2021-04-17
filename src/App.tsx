import Form from './components/Form';
import styled from 'styled-components';
import { FormEvent, useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import {
  deleteTodo,
  getAllTodos,
  createTodo,
  Todo,
  updateTodo
} from './services/network';

const Heading = styled.h1`
  font-size: 48px;
  margin: 12px 0;
  letter-spacing: 2.4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > div {
    margin: 12px 0;
  }
`;

const DangerText = styled.p`
  color: red;
  font-size: 24px;
  font-weight: bold;
`;

function App() {
  const [valid, setValid] = useState<boolean>(true);
  const [data, setData] = useState<Todo[]>();

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    setData(await getAllTodos());
  }

  const getTodos = () => {
    if (data) {
      return data.map((d) => (
        <TodoItem
          title={d.title}
          finished={d.finished}
          key={d._id}
          onDelete={handleDelete}
          id={d._id!}
          onFinish={handleFinish}
        />
      ));
    }

    return null;
  };

  function handleDelete(id: string) {
    const newData = data?.filter((d) => d._id !== id);
    deleteTodo(id);
    setData(newData);
  }

  function handleFinish(id: string, finished: boolean) {
    if (data) {
      const changedData = data.map(d => {
        if (d._id === id) {
          d.finished = !finished;
          updateTodo(id, d);
        }
        return d;
      });
      setData(changedData);
    }
  }

  function submitHandler(e: FormEvent<HTMLFormElement>, value: string) {
    e.preventDefault();
    if (!(value.length > 0)) {
      setValid(false);
      return;
    }
    const newTodo: Todo = {
      title: value,
      finished: false
    };
    createTodo(newTodo).then(result => {
      const todo = result as Todo;
      if (data) {
        const newData = [...data, todo];
        setData(newData);
      }
    });
  }

  return (
    <Container>
      <Heading>Ak's TODO</Heading>
      <Form onSubmit={submitHandler} />
      <DangerText>{valid ? null : 'Please enter the todo'}</DangerText>
      {getTodos()}
    </Container>
  );
}

export default App;
