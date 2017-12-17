import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MenuSubSecond extends Component {
   render() {
      return (
         <ul id="sub-second" className="menu-sub">
            <li><Link to='/' className="refs-sub">Loremarius</Link></li>
            <li><Link to='/a' className="refs-sub">Lorem</Link></li>
            <li><Link to='/a' className="refs-sub">Lorem</Link></li>
            <li><Link to='/a' className="refs-sub">Lorem</Link></li>
            <li><Link to='/a' className="refs-sub">Lorem</Link></li>
            <li><Link to='/a' className="refs-sub">Lorem</Link></li>
            <li><Link to='/a' className="refs-sub">Lorem</Link></li>
            <li><Link to='/a' className="refs-sub">Lorem</Link></li>
            <li><Link to='/a' className="refs-sub">Lorem</Link></li>
            <li><Link to='/a' className="refs-sub">Lorem</Link></li>
            <li><Link to='/a' className="refs-sub">Lorem</Link></li>
            <li><Link to='/cccc' className="refs-sub">Loremarius</Link></li>
         </ul>
      );
   }
}