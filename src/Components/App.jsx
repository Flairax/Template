import React, { Component, Fragment } from 'react';

/*=============Components===========*/
import Header from './Header/header';
import Main from './Main/mainRouter';
import Footer from './Footer/footer';

/*=============Styles===========*/
import './Assets/ROOT.sass'

export default class App extends Component {  
   render() {
      return (
         <Fragment>
            <Header />
            <Main />
            <Footer />                
         </Fragment>
      );
   }
}