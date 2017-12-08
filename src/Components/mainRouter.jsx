import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import TodoView from './Todos/todoView';
import NotFound from './notFound';


export default class Main extends Component {
   render() {
      return (
         <main>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/news' component={TodoView} />
               <Route component={NotFound} />
            </Switch>
         </main>
      );
   }
}
