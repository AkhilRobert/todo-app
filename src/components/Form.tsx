import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 300px;
  padding: 12px 0;
  padding-right: 40px;
  outline: none;
  font-size: 19px;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  position: absolute;
  right: 20px;
  fill: orange;
`;

type Props = {
  onSubmit: (event: FormEvent<HTMLFormElement>, value: string) => void;
};

export default function TodoList(props: Props) {
  const [value, setValue] = useState<string>('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  return (
    <div>
      <Form onSubmit={(e) => props.onSubmit(e, value)}>
        <Input
          type="text"
          placeholder={'Enter Todo...'}
          onChange={(e) => changeHandler(e)}
        />
        <Icon className="fas fa-plus-square"></Icon>
      </Form>
    </div>
  );
}
