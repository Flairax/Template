import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
//import './script';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul id="main-menu">
            <li id="agregator">&#9776;</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/news'>News</Link>
              <ul id="sub-menu-l1">
                <li><a href="">Poinczczxczxct</a></li>
                <li><a href="">Point</a></li>
              </ul>
            </li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><a href="">Point</a>
              <ul id="sub-menu-l1">
                <li><a href="">Point</a></li>
                <li><a href="">Poinczczxczxct</a></li>
                <li><a href="">Point</a></li>
              </ul>
            </li>
            <li><a href="">Point</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}