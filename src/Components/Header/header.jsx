import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';

import './Assets/Styles/header-root.scss';
import Gear from './Assets/Images/gear.svg';

import Searcher from './searcher';
import MenuSubFirst from './menu-sub-first';
import MenuSubSecond from './menu-sub-second';
import SubOpenerFirst from './sub-opener-first';
import SubOpenerSecond from './sub-opener-second';

import {hideMenus} from './MediaShifter/mediaShifter';

export default class Header extends Component {  
   handleAgregotor(){      
      $("#Menu").toggleClass("opened-menu");
      hideMenus();
   }

   render() {
      return (
         <header>
            <div id="Banner" className="banner">
            </div>
            <nav id="Navigation" className="navigation">
               <aside className="agregator" onClick={this.handleAgregotor}>&#9776;</aside>
               <ul id="Menu" className="menu-main" >
                  <li className="points-main">
                     <Link to='/' className="refs-main">Home</Link>
                  </li>
                  <li className="points-main">
                     <Link to='/news' className="refs-main">News </Link>
                     <SubOpenerFirst />
                     <MenuSubFirst /> 
                  </li>
                  <li className="points-main">
                     <Link to='/gallery' className="refs-main">Gallery</Link>
                  </li>
                  <li id="Spinner" hidden><img src={Gear} alt="gear" /></li>
                  <li className="points-main">
                     <Link to='/a' className="refs-main">ManuSubPoints</Link>    
                     <SubOpenerSecond />    
                     <MenuSubSecond />            
                  </li>
                  <li className="points-main">
                     <Link to='/a' className="refs-main">Point</Link>
                  </li>
               </ul>
               <Searcher />
            </nav>
         </header>
      );
   }
}