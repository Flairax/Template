import React, { Component } from 'react';

import arrow from './Assets/Images/arrow.svg';
import $ from 'jquery';

export default class SubOpenerFirst extends Component {   
   handleClick(){
      $("#sub-opener-first").toggleClass("opener-clicked");
      $("#sub-first").toggleClass("opened-menu");
   }
   
   render() {
      return (
         <div id="sub-opener-first" className="sub-opener" onClick={this.handleClick}>
            <img src={arrow} alt="arrow" className="arrow" />
            <span></span>
         </div>
      );
   }
}