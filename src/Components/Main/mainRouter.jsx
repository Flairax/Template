import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/home';
import ProductsView from './Products/products-View';
import AdminPage from './AdminPage/adminPage';
import NotFound from './notFound';

import './Assets/Styles/main.scss';
import '../SharedAssets/root.scss';

import { hideAll } from '../Header/MediaShifter/mediaShifter';

export default class Main extends Component {
   closeAllMenus = () => {
      if(window.matchMedia("(max-width: 800px)").matches){
         hideAll();
      }      
   }
   
   render() {
      return (
         <main id="content" onClick={this.closeAllMenus}>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/Home' component={Home} />
               <Route exact path='/products' component={ProductsView} />
               <Route exact path='/AdminPage' component={AdminPage} />
               <Route component={NotFound} />
            </Switch>
         </main>
      );
   }
}