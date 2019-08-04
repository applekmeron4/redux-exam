import React from 'react';

import PaletteContainer from './containers/PaletteContainer';
import CounterContainer from './containers/CounterContainer';
import WaitingListContainer from './containers/WaitingListContainer';

function App() {
  return (
    <>
      <PaletteContainer />
      <CounterContainer />
      <WaitingListContainer />
    </>
  );
}

export default App;
