import React from 'react';
import { MainView } from './MainView';
import GlobalState from '../context/GlobalState';
function App() {
  return (
    <GlobalState>
      <MainView></MainView>
    </GlobalState>
  );
}

export default App;
