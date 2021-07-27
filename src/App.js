import React from 'react';
import { AppContainer } from './AppStyle';
import Home from './components/home/';
import Form from './components/form';

const App = () => {

  return (
    <AppContainer>
      <Home />
      <Form />
    </AppContainer>
  );
}

export default App;
