import React, { Component } from 'react';

import arrow from './Assets/Images/arrow.svg';

import { subOpenerSecondShifter } from './MediaShifter/mediaShifter';

export default class SubOpenerSecond extends Component {
   render() {
      return (
         <div id="sub-opener-second" className="sub-opener" onClick={subOpenerSecondShifter}>
            <img src={arrow} alt="arrow" className="arrow" />
            <span></span>
         </div>
      );
   }
}