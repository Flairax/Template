import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './01_Home/home';
import TodoView from './02_Todo/todoView';
import NotFound from './09_NotFound/notFound';

export default class Main extends Component {
  render() {
    return (
      <main>      
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/news' component={TodoView}/>
            <Route component={NotFound}/>
          </Switch>
      </main>
    );
  }
}
