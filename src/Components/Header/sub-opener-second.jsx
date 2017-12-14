import React, { Component } from 'react';

import arrow from './Assets/Images/arrow.svg';
import $ from 'jquery';

export default class SubOpenerSecond extends Component {
   handleClick(){
      $("#sub-opener-second").toggleClass("opener-clicked");
      $("#sub-second").toggleClass("opened-menu");
   }
   
   render() {
      return (
         <div id="sub-opener-second" className="sub-opener" onClick={this.handleClick}>
            <img src={arrow} alt="arrow" className="arrow" />
            <span></span>
         </div>
      );
   }
}