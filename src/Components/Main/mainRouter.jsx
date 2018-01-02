import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/*=============Components=============*/
import Home from './Home/home';
import ProductsView from '../Products/products.VIEW';
import ProductPage from '../Products/product.PAGE';
import AdminPage from './AdminPage/adminPage';
import Ratings from '../Ratings/ratings.VIEW';
import NotFound from './notFound';

export default class Main extends Component {
   /*================RENDER==================*/
   render() {
      return (
         <main >
            <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/Home' component={Home} />
               <Route exact path='/products' component={ProductsView} />
               <Route exact path='/Product.PAGE' component={ProductPage} />
               <Route exact path='/Ratings' component={Ratings} />
               <Route exact path='/Admin tools' component={AdminPage} />
               <Route component={NotFound} />
            </Switch>
         </main>
      );
   }
}