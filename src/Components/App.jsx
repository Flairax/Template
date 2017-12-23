import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

/*=============Components===========*/
import Header from './Header/header';
import Main from './Main/mainRouter';
import Footer from './Footer/footer';
import Modals from './Modal/modals.VIEW';

/*=============Styles===========*/
import './Assets/ROOT.sass'

export default class App extends Component {  
   render() {
      return (
         <Fragment>
            <Header />
            <Main />
            <Footer />
            {ReactDOM.createPortal(
                  <Modals />,
                  document.getElementById("modals")
            )}           
         </Fragment>
      );
   }
}