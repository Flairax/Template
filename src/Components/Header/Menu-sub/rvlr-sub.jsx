import React, { Component } from 'react';

import arrow from '../Assets/Images/arrow.svg';

export default class Menu_sub extends Component {
   componentWillMount() {
      console.log(this.props)
   }

   render() {
      return (
         <div id={"Rvlr-sub-" + this.props.order} className="rvlr-sub" onClick={() => { }}>
            <img src={arrow} alt="arrow" className="arrow" />
            <span></span>
         </div>
      );
   }
}