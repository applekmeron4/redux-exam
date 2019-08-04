import React from 'react';
import styled from 'styled-components';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'biolet'];

const Palette = ({ selected, onSelect }) => (
  <Container>
    <Header>Select color</Header>
    <Body>
      {colors.map(color => (
        <PaletteItem
          color={color}
          key={color}
          active={selected === color}
          onClick={() => onSelect(color)}
        />
      ))}
    </Body>
  </Container>
);

const Container = styled.div`
  background: black;
  color: white;
  padding: 1rem;
  display: inline-flex;
  flex-direction: column;
`;

const Header = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Body = styled.div`
  display: flex;
`;

const PaletteItem = styled.div`
  border-radius: 1rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border: 2px solid white;
  opacity: ${props => (props.active ? 1 : 0.7)}
  background-color: ${props => props.color};
  
  &:hover {
    opacity: 0.9;
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

export default Palette;
