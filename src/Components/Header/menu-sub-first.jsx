import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MenuSubFirst extends Component{
   render(){
      return(
         <ul id="sub-first" className="menu-sub">
            <li ><Link to='/' className="refs-sub">Poinczczxczxct</Link></li>
            <li><Link to='/a' className="refs-sub">Point</Link></li>
         </ul>
      );
   }
}