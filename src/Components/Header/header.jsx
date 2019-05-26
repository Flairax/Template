import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

/*=============Components=============*/
import Ref from './ref';
import MenuSub from './menu-sub';
import Searcher from './searcher';
import ProductsSummary from '../Products/products.SUM';
import ProductsAdder from '../Products/products.ADD';

/*=============Modals=============*/
import Modal from '../Modals/modal';
import Login from '../Login/login';

/*=============Initializers=============*/
import { SubInfoTwo } from './Services/sub-menu.INFO';

/*=============Services=============*/
import './Services/header.SER';

import {toggleACT, closeACT} from './shared.ACT';

/*=============Images=============*/
import Gear from '../Assets/Header/Images/gear.svg';
import MobIcon from '../Assets/Header/Images/ager.png';


class Header extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         btnClass: "",
         blockClass: "",
         fixedNav:"",
         authrOpen: false,
      }
   }

   /*componentDidMount(){
      let scrolled = 0;

      function rememberScroll(){
         scrolled = window.pageYOffset || document.documentElement.scrollTop;
      }

      function navFixation() {
         if(window.matchMedia("(min-width: 700px)").matches){
            if (scrolled > 350) {
               console.log(this)
               this.setState({
                  fixedNav: "fixed"
               })
            } else if (scrolled < 350) {
               this.setState({
                  fixedNav: ""
               })
            }
         }  
      }

      window.addEventListener('scroll', rememberScroll);
      window.addEventListener('scroll', navFixation);
   }*/

   /*=============Action handlers=============*/
   /*-------------Main menu-------------*/
   close = () => closeACT(this)
   toggle = () => toggleACT(this)

   /*-------------Login-------------*/
   openLogin = () => {
      this.setState({
         authrOpen: true,
      });
   }

   closelLogin = () => {
      this.setState({
         authrOpen: false,
      });
   }

   /*================RENDER==================*/
   render() {
      return (
         <header>
            <div id="Banner">
            </div>
            <nav className={"navigation"+this.state.fixedNav}>
               {/*=============Mobile menu revealer=============*/}
               <aside className="RL-menu-main" onClick={this.toggle}>
                  <img src={MobIcon} alt="MobIcon" />
               </aside>

               {/*=============Authorization=============*/}
               <aside className="authorization" >
                  <img src={this.props.avatar} alt="avatar" onClick={this.openLogin} />
                  {ReactDOM.createPortal(
                     <Modal opened={this.state.authrOpen} callback={this.closelLogin} type="login">
                        <Login callback={this.closelLogin}/>
                     </Modal>,
                     document.getElementById("modals")
                  )}
               </aside>

               {/*=============Main menu=============*/}
               <ul className={"menu-main" + this.state.blockClass} >
                  <Ref name="Home" type="ref-main" closeParent={this.close} />
                  <MenuSub
                     name="Products"
                     subPoints={this.props.productStore}
                     closeParent={this.close}
                  />
                  <Ref name="Lorem" type="ref-main" closeParent={this.close} />
                  <li className="spinner-box" hidden>
                     <img id="Spinner" src={Gear} alt="gear" />
                  </li>
                  <MenuSub
                     name="MulLorem"
                     subPoints={SubInfoTwo}
                     closeParent={this.close}
                  />
                  <Ref name="Ratings" type="ref-main" closeParent={this.close} />
                  {this.props.acces ?
                     <Ref name="Admin tools" type="ref-main" closeParent={this.close} />
                     :
                     <Ref name="Support" type="ref-main" closeParent={this.close} />
                  }
               </ul>

               {/*=============Sidebars=============*/}
               <Searcher />
               <ProductsSummary />
               {this.props.acces &&
                  <ProductsAdder />
               }
            </nav>
         </header>
      );
   }
}

/*=============Store connection============*/
export default connect(state => ({
   acces: state.roles.CurrentUser.accesability,
   avatar: state.roles.CurrentUser.avatar,
   productStore: state.products.mainVault,
}))(Header);