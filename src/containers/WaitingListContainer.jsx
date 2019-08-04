import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WaitingList from '../components/WaitingList';
import * as waitingActions from '../store/modules/waiting';

const WaitingListContainer = props => {
  const { input, list, WaitingActions } = props;

  const handleChange = e => {
    WaitingActions.changeInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    WaitingActions.create(input);
    WaitingActions.changeInput('');
  };

  const handleEnter = id => {
    WaitingActions.enter(id);
  };

  const handleLeave = id => {
    WaitingActions.leave(id);
  };

  return (
    <WaitingList
      input={input}
      waitingList={list}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onEnter={handleEnter}
      onLeave={handleLeave}
    />
  );
};

const mapStateToProps = ({ waiting }) => ({
  input: waiting.input,
  list: waiting.list,
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  WaitingActions: bindActionCreators(waitingActions, dispatch),
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WaitingListContainer);
