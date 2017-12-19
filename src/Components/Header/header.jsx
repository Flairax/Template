import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Assets/Styles/header-root.scss';
import Gear from './Assets/Images/gear.svg';
import Ager from './Assets/Images/ager.png';

import Searcher from './searcher';
import MenuSubFirst from './menu-sub-first';
import MenuSubSecond from './menu-sub-second';
import SubOpenerFirst from './sub-opener-first';
import SubOpenerSecond from './sub-opener-second';

import ProductsSummary from '../Main/Products/products-Summary';
import ProductsForm from '../Main/Products/products-Form';

import RefMain from './ref-main';
import MenuSub from './Menu-sub/menu-sub';
import { SubInfoOne, SubInfoTwo } from './sub-menu-INFO';

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
            <div id="Banner" className="banner" data-height="400">
            </div>
            <nav id="Navigation" className="navigation">
               <aside id="Aggregator" className="agregator" onClick={aggregatorShifter}>
                  <img src={Ager} alt="ager" />
               </aside>
               <ul id="Menu" className="menu-main" >
                  <RefMain name="Home" link="/" />
                  <MenuSub name="MulLorem" link="/a" order="1" subPoints={SubInfoOne} />
                  <RefMain name="Products" link="/products" />
                  <li id="Spinner" hidden><img src={Gear} alt="gear" /></li>
                  <MenuSub name="MulLorem" link="/a" order="2" subPoints={SubInfoTwo} />

                  {this.props.acces ?
                     <RefMain id="AdminPage" name="Administrator tools" link="/AdminPage" />
                     :
                     <RefMain id="AdminPage" name="CustomerSuppot" link="/CustomerSuppot" />
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