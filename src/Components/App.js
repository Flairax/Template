import React, { Component } from 'react';


/*=============Components===========*/
import Header from './01_Header/header';
import Main from './02_Main/main';
import Footer from './03_Footer/footer';


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