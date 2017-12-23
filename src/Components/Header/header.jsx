import $ from "jquery";
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*=============Components=============*/
import Ref from './ref';
import MenuSub from './menu-sub';
import Searcher from './searcher';
import ProductsSummary from '../Products/products.SUM';
import ProductsForm from '../Products/products.ADD';

/*=============Initializers=============*/
import { SubInfoOne, SubInfoTwo } from './Services/sub-menu.INFO';

/*=============Services=============*/
import { hideAdditional, allRefsLeadTop }from './Services/header.SER';

/*=============Modals=============*/
import { LoginMOD } from '../Modal/modals.VIEW'

/*=============Images=============*/
import Gear from '../Assets/Header/Images/gear.svg';
import Ager from '../Assets/Header/Images/ager.png';
import Avatar from '../Assets/Header/Images/avatar.svg'


class Header extends Component {  
   /*=============Component lifecycle=============*/
   componentDidMount() {
      allRefsLeadTop();
   }

   /*=============Action handlers=============*/
   reveal = () => {
      $(".menu-main").toggleClass("menu-main-RVL"); 
      hideAdditional();
   }

   /*================RENDER==================*/
   render() {
      return (
         <header>
            
            <div id="Banner" className="banner" data-height="400">
            </div>
            
            <nav className="navigation">
               <aside className="RL-menu-main" onClick={this.reveal}>     
                  <img src={Ager} alt="ager" />
               </aside>

               <aside className="authorization" onClick={LoginMOD}>              
                  <img src={Avatar} alt="avatar"/>
               </aside>

               <ul className="menu-main" >
                  <Ref name="Home" type="ref-main"/>
                  <MenuSub name="MulLorem" order="1" subPoints={SubInfoOne} />
                  <Ref name="Products" type="ref-main"/>
                  <li className="spinner-box" hidden>
                     <img id="Spinner" src={Gear} alt="gear" />
                  </li>
                  <MenuSub name="MulLorem" order="2" subPoints={SubInfoTwo} />
                  <Ref name="Ratings" type="ref-main"/>
                  {this.props.acces ?
                     (
                        <Ref name="Admin tools" type="ref-main" />
                     ) : (
                        <Ref name="Support"  type="ref-main"/>
                     )
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

/*=============Store connection============*/
export default connect(
   state => ({
      authorised: state.roles.Chekker.authorised,
      acces: state.roles.CurrentUser.accesability,
      name: state.roles.CurrentUser.name,
   }))(Header);