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
import { SubInfoTwo } from './Services/sub-menu.INFO';

/*=============Services=============*/
import { hideAdditional, allRefsLeadTop }from './Services/header.SER';

/*=============Modals=============*/
import { showModal } from '../Modals/modal'

/*=============Images=============*/
import Gear from '../Assets/Header/Images/gear.svg';
import Ager from '../Assets/Header/Images/ager.png';


class Header extends Component {  
   /*=============Component lifecycle=============*/
   componentDidMount() {
      allRefsLeadTop();   
      console.log(this.props.children)
   }

   /*=============Action handlers=============*/
   //Mobile menu toggle
   reveal = () => {
      $(".menu-main").toggleClass("menu-main-RVL"); 
      hideAdditional();
   }

   //Login modal toggle
   revealLogin = () => {
      showModal("Login");
   }
   /*================RENDER==================*/
   render() {
      return (
         <header>           
            <div id="Banner">
            </div>
            <nav className="navigation">
               {/*=============Mobile menu revealer=============*/}
               <aside className="RL-menu-main" onClick={this.reveal}>             
                  <img src={Ager} alt="ager" />
               </aside>

               {/*=============Authorization=============*/}
               <aside className="authorization" onClick={this.revealLogin}>   
                  <img src={this.props.avatar} alt="avatar"/>  
               </aside>

               {/*=============Main menu=============*/}
               <ul className="menu-main" >
                  <Ref name="Home" type="ref-main"/>
                  <MenuSub name="Products" order="1" subPoints={this.props.productStore} />
                  <Ref name="Lorem" type="ref-main"/>
                  <li className="spinner-box" hidden>
                     <img id="Spinner" src={Gear} alt="gear" />
                  </li>
                  <MenuSub name="MulLorem" order="2" subPoints={SubInfoTwo} />
                  <Ref name="Ratings" type="ref-main"/>
                  {this.props.acces ?
                        <Ref name="Admin tools" type="ref-main" />
                     : 
                        <Ref name="Support"  type="ref-main"/>
                  }                 
               </ul>
               
               {/*=============Sidebars=============*/}
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
      acces: state.roles.CurrentUser.accesability,
      avatar: state.roles.CurrentUser.avatar,
      productStore: state.products.mainVault,
   })
)(Header);