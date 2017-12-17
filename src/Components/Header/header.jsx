import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Assets/Styles/header-root.scss';
import Gear from './Assets/Images/gear.svg';

import Searcher from './searcher';
import MenuSubFirst from './menu-sub-first';
import MenuSubSecond from './menu-sub-second';
import SubOpenerFirst from './sub-opener-first';
import SubOpenerSecond from './sub-opener-second';

import ProductsSummary from '../Main/Products/products-Summary';
import ProductsForm from '../Main/Products/products-Form';

import {
   initHeaderCashes, aggregatorShifter,
   allRefsLeaderTop, scrollWatcher,
} from './MediaShifter/mediaShifter';

class Header extends Component {
   componentDidMount() {
      initHeaderCashes();
      scrollWatcher();
      allRefsLeaderTop();
   }

   render() {
      return (
         <header>
            <div id="Banner" className="banner" data-height="300">
            </div>
            <nav id="Navigation" className="navigation">
               <aside id="Aggregator" className="agregator" onClick={aggregatorShifter}>&#9776;</aside>
               <ul id="Menu" className="menu-main" >
                  <li className="points-main">
                     <Link to='/' className="refs-main">Home</Link>
                  </li>
                  <li className="points-main">
                     <Link to='/a' className="refs-main">Lormolis</Link>
                     <SubOpenerFirst />
                     <MenuSubFirst />
                  </li>
                  <li className="points-main">
                     <Link to='/products' className="refs-main">Products</Link>
                  </li>
                  <li id="Spinner" hidden><img src={Gear} alt="gear" /></li>
                  <li className="points-main">
                     <Link to='/a' className="refs-main">MultumLorems</Link>
                     <SubOpenerSecond />
                     <MenuSubSecond />
                  </li>
                  {this.props.acces &&
                     <li id="AdminPage" className="points-main" >
                        <Link to='/AdminPage' className="refs-main" >Administrator tools</Link>
                     </li>
                  }
               </ul>
               <Searcher />
               <ProductsSummary />
               {this.props.acces &&
                  <ProductsForm />
               }
            </nav>
         </header>
      );
   }
}

export default connect(
   state => ({
      acces: state.roles.accesability,
}))(Header);