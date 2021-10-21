import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import { Main } from './pages/main';
import { Item } from './pages/item';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/:itemId' component={Item} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
