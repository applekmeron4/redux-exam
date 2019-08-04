import React from 'react';
import styled from 'styled-components';

const WaitingList = ({
  input,
  waitingList,
  onChange,
  onSubmit,
  onEnter,
  onLeave,
}) => {
  return (
    <Container>
      <Header>대기자 명단</Header>
      <Form onSubmit={onSubmit}>
        <Input value={input} onChange={onChange} />
        <Button>등록</Button>
      </Form>
      <Body>
        {waitingList.map(({ id, name, entered }) => (
          <WaitingItem
            key={id}
            text={name}
            entered={entered}
            id={id}
            onEnter={() => onEnter(id)}
            onLeave={() => onLeave(id)}
          />
        ))}
      </Body>
    </Container>
  );
};

const WaitingItem = ({ text, entered, onEnter, onLeave }) => (
  <ItemContainer>
    <ItemText entered={entered}>{text}</ItemText>
    <div>
      <Button onClick={onEnter}>Enter</Button>
      <Button onClick={onLeave}>Exit</Button>
    </div>
  </ItemContainer>
);

const Container = styled.div`
  margin-top: 1rem;
  border: 1px solid black;
  width: 19rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  font-size: 1.25rem;
`;

const Button = styled.button`
  font-size: 1.25rem;
  padding: 0.5rem;
`;

const Body = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
`;

const ItemContainer = styled.li`
  display: flex;
  padding: 0.5rem;
  border: 1px solid black;

  & + & {
    border-top: none;
  }
`;

const ItemText = styled.div`
  flex: 1;
  text-decoration: ${props => props.entered && 'line-through'};
  color: ${props => props.entered && 'grey'};
`;

export default WaitingList;
