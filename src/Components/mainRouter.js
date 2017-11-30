import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import TodoView from './todoList';
import NotFound from './notFound';

import '../Style/Css/main.scss';

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
