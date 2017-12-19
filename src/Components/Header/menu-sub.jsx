import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrow from './Assets/Images/arrow.svg';

import Ref from './ref';

import $ from 'jquery';

export default class Menu_sub extends Component {
   componentDidMount() {
      this.setState({
         revealer: $(`#Rvlr-sub-${this.props.order}`),
         menuSub: $(`#Menu-sub-${this.props.order}`),
      });
   }

   handleRvlrClick = () => {
      this.state.revealer.toggleClass("opener-clicked");
      this.state.menuSub.toggleClass("opened-menu");
   }

   render() {
      return (
         <li className="points-main-openable">
            <Link to={`/`+this.props.name} className="ref-main">{this.props.name}</Link>
            <div id={"Rvlr-sub-" + this.props.order} className="sub-opener" onClick={this.handleRvlrClick}>
               <img src={arrow} alt="arrow" className="arrow" />
               <span></span>
            </div>
            <ul id={"Menu-sub-" + this.props.order} className="menu-sub">
               {this.props.subPoints.map(subPoint => {
                  return <Ref key={subPoint.id} link={subPoint.link} name={subPoint.name} type="ref-sub" />
               })}
            </ul>
         </li>
      );
   }
}