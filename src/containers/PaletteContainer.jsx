import React from 'react';
import { connect } from 'react-redux';
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';

const PaletteContainer = props => {
  const { color, changeColor } = props;

  const handleSelect = color => {
    console.log('what');
    changeColor(color);
  };

  return <Palette onSelect={handleSelect} selected={color} />;
};

const mapStateToProps = state => ({
  color: state.counter.color,
});

const mapDispatchToProps = dispatch => ({
  changeColor: color => dispatch(changeColor(color)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaletteContainer);
