import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './app';
import Dashboard from './dashboard';

const App = () => (
  <div>
    <Header />
    <Route path="/dashboard" component={Dashboard} />
  </div>
);

export default App;
