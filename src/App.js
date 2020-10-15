import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Home from './components/home';
import Intro from './components/intro';

function App() {
  return (
    <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Intro" component={Intro} />
        </Switch>
    </main>
  );
}

export default App;
