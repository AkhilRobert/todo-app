import styled from 'styled-components';

const Container = styled.div<{ finished: boolean }>`
  width: 70%;
  background-color: #fff;
  position: relative;
  opacity: ${(props) => (props.finished ? 0.45 : 1)};
`;

const CustomButton = styled.div`
  display: inline-block;
  padding: 8px;
  cursor: pointer;
  margin: 0 1px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 11px;
`;

const Text = styled.p`
  font-size: 24px;
  padding: 16px;
`;

const DeleteButton = styled(CustomButton)`
  &:hover {
    color: red;
  }
`;

const Input = styled.input`
  cursor: pointer;
`;

type Props = {
  title: string;
  finished: boolean;
  onFinish?: () => void;
  onDelete?: () => void;
};

export default function TodoItem(props: Props) {
  function getText() {
    let content = <Text>{props.title}</Text>;

    if (props.finished) {
      content = (
        <Text>
          <del>{props.title}</del>
        </Text>
      );
    }

    return content;
  }

  return (
    <Container finished={props.finished}>
      {getText()}
      <ButtonContainer>
        <CustomButton>
          <Input type="checkbox" checked={props.finished} />
        </CustomButton>
        <DeleteButton>
          <i className="fas fa-trash"></i>
        </DeleteButton>
      </ButtonContainer>
    </Container>
  );
}
