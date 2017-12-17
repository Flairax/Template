import React, { Component } from 'react';

import arrow from './Assets/Images/arrow.svg';

import { subOpenerFirstShifter} from './MediaShifter/mediaShifter';

export default class SubOpenerFirst extends Component {     
   render() {
      return (
         <div id="sub-opener-first" className="sub-opener" onClick={subOpenerFirstShifter}>
            <img src={arrow} alt="arrow" className="arrow" />
            <span></span>
         </div>
      );
   }
}