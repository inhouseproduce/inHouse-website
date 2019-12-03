import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }from 'react-router-dom';

import LoginPage from './Pages/Login';
import DashboardPage from './Pages/Dashboard';
import FleetPage from './Pages/Fleet';

class App extends Component {
  render(){
    return (
      <div>
        <Router>
          <Switch> 
            <Route exact path='/' component={ LoginPage }/>
            <Route exact path='/dashboard' component={ DashboardPage }/>
            <Route exact path='/fleet' component={ FleetPage }/>
          </Switch>
        </Router>
      </div>
    )
  }
};

export default App;
