import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrow from '../Assets/Header/Images/arrow.svg';

import Ref from './ref';

import $ from 'jquery';

export default class Menu_sub extends Component {
   constructor(){
      super();
      this.revealer = null;
      this.menuSub = null;
   }

   componentDidMount() {
      this.revealer = $(`#Rvlr-sub-${this.props.order}`);
      this.menuSub = $(`#Menu-sub-${this.props.order}`);
      this.menuSub.css("z-index",`${20 - this.props.order}`)
   }

   reveal = () => {
      this.revealer.toggleClass("opener-clicked");
      this.menuSub.toggleClass("opened-menu");
   }

   render() {
      return (
         <li className="points-main-openable">
            <Link to={`/`+this.props.name} className="ref-main">{this.props.name}</Link>
            <div id={"Rvlr-sub-" + this.props.order} className="sub-opener" onClick={this.reveal}>
               <img src={arrow} alt="arrow" className="arrow" />
               <span></span>
            </div>
            <ul id={"Menu-sub-" + this.props.order} className="menu-sub">
               {this.props.subPoints.map(subPoint => {
                  return <Ref key={subPoint.id} link={"/"+subPoint.name} name={subPoint.name} type="ref-sub" />
               })}
            </ul>
         </li>
      );
   }
}