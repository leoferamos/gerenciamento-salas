import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Teste from './teste'; // Importe o componente Teste

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/teste" component={Teste} /> {/* Use o componente Teste aqui */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
