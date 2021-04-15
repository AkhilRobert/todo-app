import styled from 'styled-components';

const Container = styled.div`
  /* width: 300px; */
  width: 70%;
  background-color: #fff;
  position: relative;
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
  finished: boolean;
  onFinish: () => void;
  onDelete: () => void;
};

export default function TodoItem() {
  return (
    <Container>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum veniam
        illum quod odit, omnis explicabo ea! Architecto enim officia labore,
        atque rem molestiae laudantium aut repellendus cumque dignissimos
        distinctio.
      </Text>
      <ButtonContainer>
        <CustomButton>
          <Input type="checkbox" />
        </CustomButton>
        <DeleteButton>
          <i className="fas fa-trash"></i>
        </DeleteButton>
      </ButtonContainer>
    </Container>
  );
}
