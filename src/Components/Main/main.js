import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/home';
import News from './News/news';
import NotFound from './NotFound/notFound';

export default class Main extends Component {
  render() {
    return (
      <main>      
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/news' component={News}/>
            <Route path='/gallery' component={News}/>
            <Route component={NotFound}/>
          </Switch>
      </main>
    );
  }
}
