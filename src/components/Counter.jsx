import React from 'react';
import styled from 'styled-components';

const Counter = ({ value, color, onIncrement, onDecrement }) => (
  <CounterContainer>
    <CounterHeader color={color}>{value}</CounterHeader>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </CounterContainer>
);

const CounterContainer = styled.div`
  border: 1px solid black;
  padding: 1rem;
  width: 19rem;
`;

const CounterHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  color: ${props => props.color};
`;

export default Counter;
