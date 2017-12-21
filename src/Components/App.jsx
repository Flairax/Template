import React, { Component } from 'react';

/*=============Components===========*/
import Header from './Header/header';
import Main from './Main/mainRouter';
import Footer from './Footer/footer';

/*=============Styles===========*/
import './Assets/root-R.sass'

export default class App extends Component {  
   render() {
      return (
         <div id="AppWrapper">
            <Header />
            <Main />
            <Footer />
         </div>
      );
   }
}