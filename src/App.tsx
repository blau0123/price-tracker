import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import { Main } from './main';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
