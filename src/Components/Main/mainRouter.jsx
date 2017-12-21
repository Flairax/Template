import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/*=============Components=============*/
import Home from './Home/home';
import ProductsView from '../Products/products.VIEW';
import AdminPage from './AdminPage/adminPage';
import NotFound from './notFound';

/*=============Services=============*/
import { hideAll } from '../Header/Services/header.SER';

export default class Main extends Component {
   /*=============Action handlers=============*/
   closeAllMenus = () => {
      if(window.matchMedia("(max-width: 800px)").matches){
         hideAll();
      }      
   }

   /*================RENDER==================*/
   render() {
      return (
         <main onClick={this.closeAllMenus}>
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