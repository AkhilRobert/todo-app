import Form from './components/Form';
import styled from 'styled-components';
import { FormEvent, useState } from 'react';
import TodoItem from './components/TodoItem';

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

  const submitHandler = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    if (!(value.length > 0)) {
      setValid(false);
      return;
    }
    console.log(value);
  };

  return (
    <Container>
      <Heading>Ak's TODO</Heading>
      <Form onSubmit={submitHandler} />
      <DangerText>{valid ? null : 'Please enter the todo'}</DangerText>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </Container>
  );
}

export default App;
