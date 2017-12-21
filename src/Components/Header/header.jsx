import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gear from '../Assets/Header/Images/gear.svg';
import Ager from '../Assets/Header/Images/ager.png';

import Ref from './ref';
import MenuSub from './menu-sub';
import { SubInfoOne, SubInfoTwo } from './Services/sub-menu-INFO';

import Searcher from './searcher';
import ProductsSummary from '../Products/products-Summary';
import ProductsForm from '../Products/products-Form';

import { 
   hideAdditional,
   allRefsLeadTop, navFixation 
}from './Services/header-Service';

import $ from "jquery";

class Header extends Component {  
   componentDidMount() {
      navFixation();
      allRefsLeadTop();
   }

   aggregatorClick = () => {
      $("#Menu").toggleClass("opened-menu"); 
      hideAdditional();
   }

   render() {
      return (
         <header>
            <div id="Banner" className="banner" data-height="400">
            </div>
            <nav id="Navigation" className="navigation">
               <aside id="Aggregator" className="agregator" onClick={this.aggregatorClick}>
                  <img src={Ager} alt="ager" />
               </aside>
               <ul id="Menu" className="menu-main" >
                  <Ref name="Home" type="ref-main"/>
                  <MenuSub name="MulLorem" order="1" subPoints={SubInfoOne} />
                  <Ref name="Products" type="ref-main"/>
                  <li className="spinner-box" hidden>
                     <img id="Spinner" src={Gear} alt="gear" />
                  </li>
                  <MenuSub name="MulLorem" order="2" subPoints={SubInfoTwo} />
                  <Ref name="Lorem" type="ref-main"/>
                  {this.props.acces ?
                     <Ref name="Admin tools" type="ref-main" />
                     :
                     <Ref name="Support"  type="ref-main"/>
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
      acces: state.roles.CurrentUser.accesability,
   }))(Header);


   /*<Searcher />
   <ProductsSummary />
   {this.props.acces &&
      <ProductsForm />
   }*/