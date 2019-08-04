import React from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

const CounterContainer = props => {
  const { number, color, increment, decrement } = props;

  return (
    <Counter
      value={number}
      color={color}
      onIncrement={increment}
      onDecrement={decrement}
    />
  );
};

const mapStateToProps = state => ({
  number: state.counter.number,
  color: state.counter.color,
});

// (1)
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

// (2) bindActionCreators 사용.
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ increment, decrement }, dispatch);

// (3) 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchToProps = { increment, decrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
