import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrow from '../Assets/Images/arrow.svg';

//import "./menu-sub.scss"

import $ from 'jquery';

export default class Menu_sub extends Component {
   constructor(){
      super();
      this.state = {
         revealer: null,
         menuSub:  null,
      }
   }
   
   componentDidMount() {
      this.setState({
         revealer:  $(`#Rvlr-sub-${this.props.order}`),
         menuSub:  $(`#Menu-sub-${this.props.order}`),
      });
   }

   handleRvlrClick = () => {
      this.state.revealer.toggleClass("opener-clicked");
      this.state.menuSub.toggleClass("opened-menu");
   }

   render() {
      return (
         <li className="points-main">
            <Link to={this.props.link} className="refs-main">{this.props.name}</Link>     
            <div id={"Rvlr-sub-" + this.props.order} className="sub-opener" onClick={this.handleRvlrClick}>
               <img src={arrow} alt="arrow" className="arrow" />
               <span></span>
            </div>
            <ul id={"Menu-sub-" + this.props.order} className="menu-sub">
               {this.props.subPoints.map(subPoint => {
                  return (
                     <li key={subPoint.id}>
                        <Link to={subPoint.link} className="refs-sub">
                           {subPoint.name}
                        </Link>
                     </li>
                  )
               })}
            </ul>
         </li>
      );
   }
}