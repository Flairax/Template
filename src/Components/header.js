import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Style/Css/header.scss';
import arrow from '../Style/Images/arrow.svg';
import cosmos from '../Style/Images/cosm.jpg'




export default class Header extends Component {  
  componentDidMount(){
    const menuShifter = document.createElement("script");

    menuShifter.src = "./Scripts/menuShifter.js";
    menuShifter.async = true;
    menuShifter.type = "text/javascript";
    menuShifter.className = "MountedMenuShifter";

    document.body.appendChild(menuShifter);
  }
  
  componentWillUnmount(){
    const menuShifter = document.createElement("script");
    menuShifter.className = "MountedMenuShifter";

    document.body.removeChild(menuShifter);
  }

  render() {
    return (
      <header>
        <div id="banner" className="parallax-window" data-parallax="scroll" data-image-src={cosmos}></div>
        <nav id="navigation">
          <div id="agregator">&#9776;</div>
          <ul className="main-menu hidden-menus">
            <li><Link to='/'>Home</Link></li>
            <li >
              <Link to='/news'>News</Link>
              <div className="areaGrower sub-Opener">
                <img src={arrow} alt="arrow" className="arrow desktop-arrow"/>
                <span className="hidden">Expand</span>
              </div>
              <ul className="sub-menu desktop-sub-menu hidden-menus">
                <li><Link to='/'>Poinczczxczxct</Link></li>
                <li><Link to='/a'>Point</Link></li>
              </ul>
            </li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li>
              <Link to='/a'>Point</Link>
              <div className="areaGrower sub-Opener">
                <img src={arrow} alt="arrow" className="arrow desktop-arrow"/>
                <span className="hidden">Expand</span>
              </div>
              <ul className="sub-menu desktop-sub-menu hidden-menus">
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
            <li><Link to='/a'>Point</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}