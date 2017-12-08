import React, { Component } from 'react';

import '../Style/Css/root'

/*=============Components===========*/
import Header from './header';
import Main from './mainRouter';
import Footer from './footer';


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