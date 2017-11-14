import React, { Component } from 'react';

/*=============Components===========*/
import Main from './Main/main';
import Header from './Header/header';
import Footer from './Footer/footer';

export default class App extends Component {
  render() {
    return (
      <div>  
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}