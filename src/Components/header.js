import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrow from '../Style/Images/arrow.svg';
//import cosmos from '../Style/Images/cosm.jpg';

export default class Header extends Component {  
  render() {
    return (
      <header>
        <div id="banner">
        </div>
        <nav className="navigation">
          <div id="agregator">&#9776;</div>
          <ul className="main-menu">
            <li><Link to='/' className="unExpandable">Home</Link></li>
            <li>
              <Link to='/news' className="expandable">News</Link>
              <div className="areaGrower sub-Opener">
                <img src={arrow} alt="arrow" className="arrow desktop-arrow"/>
                <span>Expand</span>
              </div>
              <ul className="sub-menu">
                <li><Link to='/'>Poinczczxczxct</Link></li>
                <li><Link to='/a'>Point</Link></li>
              </ul>
            </li>
            <li><Link to='/gallery' className="unExpandable">Gallery</Link></li>
            <li>
              <Link to='/a' className="expandable">Point</Link>
              <div className="areaGrower sub-Opener">
                <img src={arrow} alt="arrow" className="arrow desktop-arrow"/>
                <span>Expand</span>
              </div>
              <ul className="sub-menu">
                    <li><Link to='/'>Poifsfsfsfsnt</Link></li>
                    <li><Link to='/a'>Point</Link></li>
                    <li><Link to='/a'>Point</Link></li>
                    <li><Link to='/a'>Point</Link></li>
                    <li><Link to='/a'>Point</Link></li>
                    <li><Link to='/a'>Point</Link></li>
                    <li><Link to='/a'>Point</Link></li>
                    <li><Link to='/a'>Point</Link></li>
                    <li><Link to='/a'>Point</Link></li>
                    <li><Link to='/a'>Point</Link></li>
                    <li><Link to='/a'>Point</Link></li>
                    <li><Link to='/cccc'>Pointaaaaa</Link></li>
              </ul>
            </li>
            <li><Link to='/a' className="unExpandable">Point</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}