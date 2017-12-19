import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/home';
import ProductsView from './Products/products-View';
import AdminPage from './AdminPage/adminPage';
import NotFound from './notFound';

import './Assets/Styles/main.scss';
import '../SharedAssets/root.scss';


export default class Main extends Component {
   closeAllMenus(){
      
   }
   
   render() {
      return (
         <main id="content" onClick={() => {}}>
            <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/products' component={ProductsView} />
               <Route path='/AdminPage' component={AdminPage} />
               <Route component={NotFound} />
            </Switch>
         </main>
      );
   }
}