import styled, { css } from 'styled-components';

interface Props {
  content: string;
  confirmLogic: () => void;
  isDisabled: boolean;
}

const Button = styled.button`
  position: fixed;
  bottom: 3.875rem;
  width: 98%;
  height: 3.125rem;
  font-size: var(--font-md);
  border-radius: 0.313rem;
  border: 0;
  outline: #efefef;
  background-color: ${props => props.disabled ? "#bbbfbc" : "#0D6EFD"};
  color: var(--white-color);
  margin-bottom: 0.313rem;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95);
    background-color: #004488;
  }
`;

const Container = styled.section`
  padding: calc(var(--padding) / 2) var(--padding);
  display: flex;
  justify-content: center;
`;

function ConfirmBtn({ content, confirmLogic, isDisabled  }: Props) {

  return (
    <Container>
      <Button disabled={isDisabled} onClick={() => confirmLogic()}>{content}</Button>
    </Container>
  );
}


export default ConfirmBtn;
